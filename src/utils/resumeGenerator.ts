import { portfolioData } from '../data/portfolioData';

function sanitizePdfAscii(text: string): string {
  return text
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^\x20-\x7E]/g, ' ');
}

function escapePdfString(text: string): string {
  return sanitizePdfAscii(text)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapText(text: string, maxChars: number): string[] {
  const words = sanitizePdfAscii(text).split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      current = word;
    } else if (current.length + 1 + word.length <= maxChars) {
      current += ' ' + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines;
}

interface TextOp {
  page: number;
  x: number;
  y: number;
  size: number;
  bold?: boolean;
  color: [number, number, number];
  text: string;
}

interface RuleOp {
  page: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: [number, number, number];
  width: number;
}

export function generateResumePdfBlob(): Blob {
  const PAGE_WIDTH = 595.28; // A4 width in pt
  const PAGE_HEIGHT = 841.89; // A4 height in pt
  const MARGIN_X = 48;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
  const BOTTOM_MARGIN = 48;

  const textOps: TextOp[] = [];
  const ruleOps: RuleOp[] = [];

  let currentPage = 0;
  let cursorY = PAGE_HEIGHT - 52;

  const ensureSpace = (needed: number) => {
    if (cursorY - needed < BOTTOM_MARGIN) {
      currentPage += 1;
      cursorY = PAGE_HEIGHT - 52;
    }
  };

  const addText = (
    text: string,
    x: number,
    size: number,
    options?: {
      bold?: boolean;
      color?: [number, number, number];
      lineHeight?: number;
      maxChars?: number;
    }
  ) => {
    const bold = options?.bold ?? false;
    const color = options?.color ?? [0.12, 0.16, 0.23];
    const lineHeight = options?.lineHeight ?? size * 1.4;
    const maxChars =
      options?.maxChars ?? Math.floor(CONTENT_WIDTH / (size * 0.51));
    const lines = wrapText(text, maxChars);

    for (const line of lines) {
      ensureSpace(lineHeight);
      textOps.push({
        page: currentPage,
        x,
        y: cursorY,
        size,
        bold,
        color,
        text: line,
      });
      cursorY -= lineHeight;
    }
  };

  const addSectionHeader = (title: string) => {
    ensureSpace(34);
    cursorY -= 8;
    textOps.push({
      page: currentPage,
      x: MARGIN_X,
      y: cursorY,
      size: 11,
      bold: true,
      color: [0.06, 0.35, 0.65],
      text: title.toUpperCase(),
    });
    cursorY -= 5;
    ruleOps.push({
      page: currentPage,
      x1: MARGIN_X,
      y1: cursorY,
      x2: PAGE_WIDTH - MARGIN_X,
      y2: cursorY,
      color: [0.78, 0.84, 0.91],
      width: 0.75,
    });
    cursorY -= 14;
  };

  // Header
  addText(portfolioData.profile.name, MARGIN_X, 21, {
    bold: true,
    color: [0.05, 0.09, 0.16],
    lineHeight: 25,
  });
  addText(portfolioData.profile.title, MARGIN_X, 11.5, {
    bold: true,
    color: [0.06, 0.35, 0.65],
    lineHeight: 16,
  });
  addText(
    `${portfolioData.profile.location}  |  ${portfolioData.profile.email}  |  ${portfolioData.profile.phone}`,
    MARGIN_X,
    9.5,
    {
      color: [0.3, 0.36, 0.45],
      lineHeight: 15,
      maxChars: 110,
    }
  );
  cursorY -= 4;
  ruleOps.push({
    page: currentPage,
    x1: MARGIN_X,
    y1: cursorY,
    x2: PAGE_WIDTH - MARGIN_X,
    y2: cursorY,
    color: [0.06, 0.35, 0.65],
    width: 1.5,
  });
  cursorY -= 12;

  // Professional Summary
  addSectionHeader('Professional Summary');
  addText(portfolioData.profile.summaryShort, MARGIN_X, 9.8, {
    lineHeight: 14,
    maxChars: 96,
  });
  cursorY -= 3;
  addText(portfolioData.profile.summaryDetailed, MARGIN_X, 9.8, {
    lineHeight: 14,
    maxChars: 96,
  });

  // Experience
  addSectionHeader('Professional Experience');
  for (const exp of portfolioData.experience) {
    ensureSpace(48);
    const companyLine = exp.location
      ? `${exp.company} - ${exp.location}`
      : exp.company;

    textOps.push({
      page: currentPage,
      x: MARGIN_X,
      y: cursorY,
      size: 10.5,
      bold: true,
      color: [0.05, 0.09, 0.16],
      text: sanitizePdfAscii(exp.position),
    });
    textOps.push({
      page: currentPage,
      x: PAGE_WIDTH - MARGIN_X - 155,
      y: cursorY,
      size: 9.2,
      bold: false,
      color: [0.35, 0.42, 0.51],
      text: sanitizePdfAscii(exp.duration),
    });
    cursorY -= 13;

    addText(companyLine, MARGIN_X, 9.5, {
      bold: true,
      color: [0.06, 0.35, 0.65],
      lineHeight: 14,
    });

    for (const bullet of exp.responsibilities) {
      addText(`- ${bullet}`, MARGIN_X + 10, 9.3, {
        lineHeight: 13,
        maxChars: 92,
      });
    }
    cursorY -= 6;
  }

  // Core Competencies
  addSectionHeader('Core Competencies');
  for (const cat of portfolioData.competencies) {
    const skillList = cat.skills.map((s) => s.name).join('  |  ');
    addText(`${cat.title}:`, MARGIN_X, 9.6, {
      bold: true,
      color: [0.05, 0.09, 0.16],
      lineHeight: 13,
    });
    addText(skillList, MARGIN_X + 10, 9.3, {
      color: [0.22, 0.27, 0.35],
      lineHeight: 13,
      maxChars: 94,
    });
    cursorY -= 4;
  }

  // Education
  addSectionHeader('Education');
  for (const edu of portfolioData.education) {
    const line = edu.location
      ? `${edu.qualification} - ${edu.institution}, ${edu.location} (${edu.year})`
      : `${edu.qualification} - ${edu.institution} (${edu.year})`;
    addText(line, MARGIN_X, 9.6, {
      lineHeight: 14,
      maxChars: 96,
    });
  }

  // Languages
  addSectionHeader('Languages');
  const langSummary = portfolioData.languages
    .map((l) => `${l.language}: ${l.levelLabel}`)
    .join('   |   ');
  addText(langSummary, MARGIN_X, 9.6, {
    lineHeight: 14,
    maxChars: 100,
  });

  // Build PDF structure
  const totalPages = currentPage + 1;
  const pageStreams: string[] = Array.from({ length: totalPages }, () => '');

  for (const rule of ruleOps) {
    pageStreams[rule.page] +=
      `q ${rule.width} w ${rule.color[0]} ${rule.color[1]} ${rule.color[2]} RG ` +
      `${rule.x1.toFixed(2)} ${rule.y1.toFixed(2)} m ${rule.x2.toFixed(2)} ${rule.y2.toFixed(2)} l S Q\n`;
  }

  for (const op of textOps) {
    const fontRef = op.bold ? '/F2' : '/F1';
    pageStreams[op.page] +=
      `BT ${fontRef} ${op.size.toFixed(2)} Tf ` +
      `${op.color[0]} ${op.color[1]} ${op.color[2]} rg ` +
      `1 0 0 1 ${op.x.toFixed(2)} ${op.y.toFixed(2)} Tm ` +
      `(${escapePdfString(op.text)}) Tj ET\n`;
  }

  // Assemble PDF objects
  // Obj 1: Catalog
  // Obj 2: Pages
  // Obj 3: Font F1 (Helvetica)
  // Obj 4: Font F2 (Helvetica-Bold)
  // For each page i: Page object = 5 + i*2, Content stream = 6 + i*2
  const objects: string[] = [];
  const pageObjectIds: number[] = [];

  for (let i = 0; i < totalPages; i++) {
    pageObjectIds.push(5 + i * 2);
  }

  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  objects.push(
    `2 0 obj\n<< /Type /Pages /Kids [${pageObjectIds
      .map((id) => `${id} 0 R`)
      .join(' ')}] /Count ${totalPages} >>\nendobj\n`
  );
  objects.push(
    `3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`
  );
  objects.push(
    `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`
  );

  for (let i = 0; i < totalPages; i++) {
    const pageObjId = 5 + i * 2;
    const contentObjId = 6 + i * 2;
    const stream = pageStreams[i];

    objects.push(
      `${pageObjId} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH.toFixed(
        2
      )} ${PAGE_HEIGHT.toFixed(
        2
      )}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjId} 0 R >>\nendobj\n`
    );
    objects.push(
      `${contentObjId} 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}endstream\nendobj\n`
    );
  }

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [0];

  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += `0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new Blob([pdf], { type: 'application/pdf' });
}

export function triggerResumeDownload(): void {
  const blob = generateResumePdfBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Aaditya_Kashyap_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
