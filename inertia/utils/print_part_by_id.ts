export const printPartById = (id: string) => {
  // Get HTML to print from element
  const prtHtml = document.getElementById(id)?.innerHTML || ''

  // Get all stylesheets HTML
  let stylesHtml = ''
  for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
    stylesHtml += node.outerHTML
  }

  // Open the print window
  const WinPrint = window.open(
    '',
    '',
    'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
  )

  if (WinPrint) {
    WinPrint?.document.write(`<!DOCTYPE html>
    <html>
      <head>
        ${stylesHtml}
      </head>
      <body style="width:min-content;display:flex;justify-content:center;">
        ${prtHtml}
      </body>
    </html>`)

    WinPrint.document.close()
    WinPrint.focus()
    WinPrint.print()
    // WinPrint.close()
  }
}
