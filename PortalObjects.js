const portalPanel = {
  width: 10,
  height: 10,
  panelCSS: null,
  active: '',
}

function ConstructPortal(portalObj) {
  portalPanel.portalObj = portalObj

  const panelElem = document.getElementById('app')
  portalPanel.elem = panelElem

  setPanelCSS(portalObj)

  portalPanel.dataLinkage = portalObj.pages.default.dataLinkage
  portalPanel.updateFunction = portalObj.pages.default.updateFunction
  if (portalObj.pages.default.initFunction) {
    portalPanel.initFunction = portalObj.pages.default.initFunction
  }

  let activePage = portalObj.pages.default

  if (portalPanel.initFunction) {
    portalPanel.initFunction(portalPanel.elem)
  }
}

function setPanelCSS(portalObj) {
  if (portalPanel.panelCSS) document.body.removeChild(portalPanel.panelCSS)

  const newCSS = document.createElement('style')
  document.body.append(newCSS)
  const newStyleSheet = newCSS.sheet

  let [selector, properties] = ['', '']

  // LOCKBOXES

  selector = '.lockcontainer'
  properties = [
    // 'position: absolute;\n',
    'width: 20px;',
    'height: 20px;',
    'padding: 0px;\n',
  ].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockcontainer input'
  properties = [
    // 'position: absolute;\n',
    // 'padding: 0px;\n',
    // 'opacity: 0;\n',
    // 'height: 0px;\n',
    // 'width: 0px;\n',
    'display: none',
  ].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockmark'
  properties = [
    // 'position: absolute;\n',
    // 'top: 0px;\n',
    // 'left: 0px;\n',
    'text-align: center;\n',
    `line-height: 24px;\n`,
    `box-shadow: 0px 0px 2px #444444, inset 0px 0px 8px #444444;\n`,
    'background-color: #222222;\n',
  ].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockcontainer:hover input ~ .lockmark'
  properties = [
    `box-shadow: 0px 0px 2px #2222FF, inset 0px 0px 8px #2222FF;\n`,
  ].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockcontainer:hover input:checked ~ .lockmark'
  properties = [
    `box-shadow: 0px 0px 2px #FF2222, inset 0px 0px 8px #FF2222;\n`,
  ].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockcontainer input:checked ~ .lockmark'
  properties = [
    // 'background-color: #885588;\n',
    'background-color: #000000;\n',
    `box-shadow: 0px 0px 2px #AA22AA, inset 0px 0px 8px #AA22AA;\n`,
  ].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockmark:after'
  properties = ['content: "";\n', 'display: none;\n'].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockcontainer input:not(checked) ~ .lockmark:after'
  properties = ['content: "🔓";\n', 'display: block;\n'].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  selector = '.lockcontainer input:checked ~ .lockmark:after'
  properties = ['content: "🔒";\n', 'display: block;\n'].join('')

  newStyleSheet.insertRule(`${selector} { ${properties} }`)

  portalPanel.panelCSS = newCSS
}

function destroyPortal() {
  if (!portalPanel.elem) return
  portalPanel.elem.innerHTML = ''
  portalPanel.elem = null
  document.body.removeChild(portalPanel.panelCSS)
  portalPanel.panelCSS = null
  portalPanel.initFunction = null
  portalPanel.updateFunction = null
}
