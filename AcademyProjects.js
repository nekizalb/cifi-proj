let academyProjectPortal = {
  pages: {
    default: {},
  },
}

const maxProjects = 25
const projData = [
  ['Storage Facility', 'storagelevel', 'storagegoal'],
  ['Transfer Wires', 'transferlevel', 'transfergoal'],
  ['Bio-Mechanics Lab', 'biomechlevel', 'biomechgoal'],
  ['Exo-Energy', 'exolevel', 'exogoal'],
  ['Defensive Research', 'defensivelevel', 'defensivegoal'],
  ['Warp-Drive Lab', 'warpdrivelevel', 'warpdrivegoal'],
  ['Fuel Compression', 'fuelcompresslevel', 'fuelcompressgoal'],
  ['Quantum Weaponry', 'quantumlevel', 'quantumgoal'],
  ['Robo-Douglett', 'douglettlevel', 'douglettgoal'],
]

let projects = [
  'storage',
  'transfer',
  'biomech',
  'exo',
  'defensive',
  'warpdrive',
  'fuelcompress',
  'quantum',
  'douglett',
]

academyProjectPortal.pages.default.dataLinkage = {
  set duration(value) {
    playerData.academy.farmYieldSelected = value
  },
  set storagelevel(value) {
    playerData.academy.projectLevels[0] = value
  },
  set transferlevel(value) {
    playerData.academy.projectLevels[1] = value
  },
  set biomechlevel(value) {
    playerData.academy.projectLevels[2] = value
  },
  set exolevel(value) {
    playerData.academy.projectLevels[3] = value
  },
  set defensivelevel(value) {
    playerData.academy.projectLevels[4] = value
  },
  set warpdrivelevel(value) {
    playerData.academy.projectLevels[5] = value
  },
  set fuelcompresslevel(value) {
    playerData.academy.projectLevels[6] = value
  },
  set quantumlevel(value) {
    playerData.academy.projectLevels[7] = value
  },
  set douglettlevel(value) {
    playerData.academy.projectLevels[8] = value
  },

  get duration() {
    return playerData.academy.farmYieldSelected || '1-h'
  },
  get storagelevel() {
    return playerData.academy.projectLevels[0]
  },
  get transferlevel() {
    return playerData.academy.projectLevels[1]
  },
  get biomechlevel() {
    return playerData.academy.projectLevels[2]
  },
  get exolevel() {
    return playerData.academy.projectLevels[3]
  },
  get defensivelevel() {
    return playerData.academy.projectLevels[4]
  },
  get warpdrivelevel() {
    return playerData.academy.projectLevels[5]
  },
  get fuelcompresslevel() {
    return playerData.academy.projectLevels[6]
  },
  get quantumlevel() {
    return playerData.academy.projectLevels[7]
  },
  get douglettlevel() {
    return playerData.academy.projectLevels[8]
  },
}

academyProjectPortal.pages.default.initFunction = function (panel) {
  let colorProfile = playerData.colorProfile.academyProjects

  const wrapper = createElement('div', 'section-2')
  const section = createElement('div', 'section-3')
  const unit = createElement('div', 'row g-3')
  unit.innerHTML =
    '<div class="col-auto"><label class="col-form-label">duration</label></div>'
  const col = createElement('div', 'col-auto')
  unit.appendChild(col)
  const select = createElement('select', 'form-select', {
    id: 'duration',
  })
  select.innerHTML = durationOptions
    .map(([v, l]) => `<option value="${v}">${l}</option>`)
    .join('')
  select.value = playerData.academy.farmYieldSelected || '1-h'
  select.addEventListener('change', portalPanel.updateFunction)
  portalPanel['duration'] = select
  col.appendChild(select)
  section.appendChild(unit)

  const table = createElement('table', 'table table-borderless table-project', {
    style: 'margin-top: 20px',
  })
  table.innerHTML =
    '<thead><tr><th></th><th>Level</th><th></th>' +
    Array(maxProjects)
      .fill(null)
      .map((_, i) => `<th>${i + 1}</th>`)
      .join('') +
    '</tr></thead>'

  const tbody = createElement('tbody')
  table.appendChild(tbody)

  projData.forEach(([name, input, display], projectIndex) => {
    const row = createElement('tr')
    row.appendChild(createElement('td', 'text-end field-projname', null, name))

    const tdinput = createElement('td')
    const i = createElement(
      'input',
      'form-control form-control-sm text-center',
      {
        id: input,
        type: 'number',
        style: 'width: 65px',
        min: '0',
        value: portalPanel.dataLinkage[input],
      },
    )
    i.addEventListener('change', portalPanel.updateFunction)
    tdinput.appendChild(i)
    row.appendChild(tdinput)

    const d = createElement('td', 'text-end', {
      id: display,
    })
    portalPanel[display] = d
    row.appendChild(d)

    for (let index = 1; index <= maxProjects; index++) {
      const pc = createElement('td', '', { style: 'padding: 0' })
      const pid = `setter${projects[projectIndex]}${index}`
      let p = createElement('label', 'setter', {
        id: pid,
      })
      p.dataset.setting = 0
      p.dataset.wrap = 4
      p.addEventListener('click', portalPanel.updateFunction)
      portalPanel[pid] = p
      pc.appendChild(p)
      row.appendChild(pc)
    }

    tbody.appendChild(row)

    const costRow = createElement('tr')
    costRow.appendChild(createElement('td', 'field-projcost'))
    const costId = display.replace('goal', 'cost')
    const costCell = createElement('td', 'field-projcost font-normal', {
      id: costId,
      colSpan: 32,
    })
    portalPanel[costId] = costCell
    costRow.appendChild(costCell)
    tbody.appendChild(costRow)
  })

  const datarow = createElement('tr', '', { style: 'font-size: 0.8em;' })

  const badgecell = createElement('td', '', { colSpan: 2 })
  portalPanel.badgeRequirement = badgecell

  const datacell = createElement('td', '', { colSpan: 13 })
  const projectnumdata = createElement('label', 'd-inline-block', {
    id: 'totalnew',
    style: 'margin-right: 20px',
  })
  portalPanel.totalnew = projectnumdata
  datacell.appendChild(projectnumdata)
  const bpnumdata = createElement('label', 'd-inline-block', {
    id: 'bpnew',
    style: 'margin-right: 20px',
  })
  portalPanel.bpnew = bpnumdata
  datacell.appendChild(bpnumdata)

  const bpcell = createElement('td', '', { colSpan: 13 })
  portalPanel.bpRequirement = bpcell

  datarow.appendChild(badgecell)
  // datarow.appendChild(createElement('td'))
  datarow.appendChild(datacell)
  datarow.appendChild(bpcell)
  tbody.appendChild(datarow)

  section.appendChild(table)

  const legends = [
    'Unaffordable',
    'Material used by other projects',
    'Affordable (click to select)',
    'Selected (click to deselect)',
  ]
  $('<div class="d-flex flex-column" style="gap: 8px">')
    .append(
      legends.map((l, i) => {
        return $('<div class="d-flex flex-row" style="gap: 8px;">')
          .append(
            $('<div>')
              .addClass('setter')
              .attr('data-setting', i)
              .css('cursor', 'default'),
          )
          .append($('<div>').text(l))
      }),
    )
    .appendTo($(section))

  wrapper.appendChild(section)
  panel.appendChild(wrapper)

  colorProfile.forEach((c, i) => {
    const selector = `.setter[data-setting="${i}"]`
    const properties = `box-shadow: 0px 0px 3px ${c}, inset 0px 0px 13px ${c};`

    portalPanel.panelCSS.sheet.insertRule(`${selector} { ${properties} }`)
  })

  generateRunYield()
  UpdateRequirement()
}

academyProjectPortal.pages.default.updateFunction = function (e) {
  if (e.target.id.includes('duration')) {
    portalPanel.dataLinkage[e.target.id] = e.target.value
    SavePlayerData()

    generateRunYield()

    return
  }

  if (e.target.id.includes('setter')) {
    let id = e.target.id
    let setting = e.target.dataset.setting

    if (setting > 1) {
      let level = parseInt(id.substr(-1))
      let project = id.substring(6, id.length - 1)
      if (parseInt(id.substr(-2))) {
        level = parseInt(id.substr(-2))
        project = id.substring(6, id.length - 2)
      }
      switch (project) {
        case 'storage':
          project = 0
          break
        case 'transfer':
          project = 1
          break
        case 'biomech':
          project = 2
          break
        case 'exo':
          project = 3
          break
        case 'defensive':
          project = 4
          break
        case 'warpdrive':
          project = 5
          break
        case 'fuelcompress':
          project = 6
          break
        case 'quantum':
          project = 7
          break
        case 'douglett':
          project = 8
          break
      }
      setProjectLevel(project, level, setting)
    }

    return
  }

  portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value)
  SavePlayerData()

  generateRunYield()
  UpdateRequirement()
}

function generateRunYield() {
  portalPanel.storehouse = new StoreHouse(CalculateFarmYields(true).matYield)
  portalPanel.projectConfigs = []
  portalPanel.theoreticals = []
  for (let projectID = 0; projectID < projects.length; projectID++) {
    const config = new ProjectConfig(
      projectID,
      playerData.academy.projectLevels[projectID],
    )
    portalPanel.projectConfigs.push(config)
    let maxLevel = portalPanel.projectConfigs[projectID].MaxLevel(
      portalPanel.storehouse,
    ).newLevels
    portalPanel.theoreticals.push(Math.min(maxLevel, 30))
    for (let level = 1; level <= 30; level++) {
      if (portalPanel[`setter${projects[projectID]}${level}`]) {
        portalPanel[`setter${projects[projectID]}${level}`].dataset.setting =
          level <= maxLevel ? 2 : 0
      }
    }
    portalPanel[`${projects[projectID]}goal`].innerText =
      portalPanel.projectConfigs[projectID].currentLevel
    portalPanel[`${projects[projectID]}cost`].innerHTML =
      'Current Cost: ' +
      config
        .getStartCost()
        .map((v, i) => {
          if (!v) return ''
          return `<div class="field-projmat">${
            GameDB.academy.materials[i]
          }: ${formatLargeInteger(v)}</div>`
        })
        .join('')
  }

  portalPanel.totalnew.innerText = '+ 0 proj'
  portalPanel.bpnew.innerText = '+ 0 bp'

  resumeLevels()
}

function setProjectLevel(project, level, setting) {
  portalPanel.projectConfigs[project].currentLevel =
    portalPanel.projectConfigs[project].startLevel + level - (setting === '3')
  playerData.academy.projectGoals[project] = level - (setting === '3')
  SavePlayerData()

  let totalNew = 0
  let newBp = 0

  for (let i = 0; i < portalPanel.storehouse.mats.length; i++) {
    portalPanel.storehouse.spent[i] = 0
  }
  for (let i = 0; i < projects.length; i++) {
    let projectCosts = portalPanel.projectConfigs[i].currentCost
    // console.log(`Project: ${projects[i]}`)
    for (let mat = 0; mat < 8; mat++) {
      // console.log(portalPanel.storehouse.spent[mat].toExponential(2) + ' + ' + projectCosts[mat].toExponential(2));
      portalPanel.storehouse.spent[mat] += projectCosts[mat]
      // console.log('= ' + portalPanel.storehouse.spent[mat].toExponential(2));
    }

    totalNew +=
      portalPanel.projectConfigs[i].currentLevel -
      portalPanel.projectConfigs[i].startLevel
    newBp += portalPanel.projectConfigs[i].gainedBp
  }

  portalPanel.totalnew.innerText = `+ ${totalNew} proj`
  portalPanel.bpnew.innerText = `+ ${newBp} bp`

  for (let projectID = 0; projectID < projects.length; projectID++) {
    let currentLevel =
      portalPanel.projectConfigs[projectID].currentLevel -
      portalPanel.projectConfigs[projectID].startLevel
    let maxLevel =
      portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse)
        .newLevels + currentLevel
    let theoretical = portalPanel.theoreticals[projectID]
    for (let setLevel = 1; setLevel <= theoretical; setLevel++) {
      let setting = 0
      if (setLevel <= currentLevel) setting = 3
      else if (setLevel <= maxLevel) setting = 2
      else if (setLevel <= theoretical) setting = 1

      if (portalPanel[`setter${projects[projectID]}${setLevel}`]) {
        portalPanel[`setter${projects[projectID]}${setLevel}`].dataset.setting =
          setting
      }
    }
    portalPanel[`${projects[projectID]}goal`].innerText =
      portalPanel.projectConfigs[projectID].currentLevel
  }
}

function resumeLevels() {
  let prevLevels = playerData.academy.projectGoals

  let overspent = false
  let totalNew = 0
  let newBp = 0

  for (let i = 0; i < projects.length; i++) {
    portalPanel.projectConfigs[i].currentLevel =
      prevLevels[i] + portalPanel.projectConfigs[i].startLevel
    let projectCosts = portalPanel.projectConfigs[i].currentCost

    for (let mat = 0; mat < 8; mat++) {
      portalPanel.storehouse.spent[mat] += projectCosts[mat]
      if (
        portalPanel.storehouse.spent[mat] > portalPanel.storehouse.mats[mat]
      ) {
        overspent = true
        break
      }
    }

    if (overspent) break

    totalNew +=
      portalPanel.projectConfigs[i].currentLevel -
      portalPanel.projectConfigs[i].startLevel
    newBp += portalPanel.projectConfigs[i].gainedBp
  }

  if (overspent) {
    for (let i = 0; i < projects.length; i++) {
      portalPanel.projectConfigs[i].currentLevel =
        portalPanel.projectConfigs[i].startLevel
      playerData.academy.projectGoals[i] = 0
    }
    for (let i = 0; i < 8; i++) {
      portalPanel.storehouse.spent[i] = 0
    }
    return
  }

  for (let projectID = 0; projectID < projects.length; projectID++) {
    let currentLevel =
      portalPanel.projectConfigs[projectID].currentLevel -
      portalPanel.projectConfigs[projectID].startLevel
    let maxLevel =
      portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse)
        .newLevels + currentLevel
    let theoretical = portalPanel.theoreticals[projectID]
    for (let setLevel = 1; setLevel <= theoretical; setLevel++) {
      let setting = 0
      if (setLevel <= currentLevel) setting = 3
      else if (setLevel <= maxLevel) setting = 2
      else if (setLevel <= theoretical) setting = 1

      if (portalPanel[`setter${projects[projectID]}${setLevel}`]) {
        portalPanel[`setter${projects[projectID]}${setLevel}`].dataset.setting =
          setting
      }
    }
    portalPanel[`${projects[projectID]}goal`].innerText =
      portalPanel.projectConfigs[projectID].currentLevel
  }

  portalPanel.totalnew.innerText = `+ ${totalNew} proj`
  portalPanel.bpnew.innerText = `+ ${newBp} bp`
}

function UpdateRequirement() {
  try {
    const totalBp = portalPanel.projectConfigs
      .map(
        ({ startLevel }, projectId) =>
          (startLevel || 0) * GameDB.academy.projects[projectId].bpCount,
      )
      .reduce((a, v) => a + v, 0)

    let currentBp = totalBp
    let neededBp = 0
    let currentCm = 0

    const bpRequirements = GameDB.academy.bpRequirements

    for (let i = 0; i < bpRequirements.length; i++) {
      neededBp = bpRequirements[i]
      currentCm = i + 1
      if (currentBp >= neededBp) {
        currentBp -= neededBp

        if (i === bpRequirements.length - 1) {
          neededBp = 0
        }
      } else {
        break
      }
    }

    // can predict when cm > 12
    if (currentCm > 12) {
      portalPanel.bpRequirement.innerText = `Current BP: ${currentBp} ${
        neededBp ? `/ ${neededBp}` : ''
      }`
    }
  } catch (e) {
    console.error(e)
  }

  try {
    portalPanel.badgeRequirement.innerText = ''

    const totalProj = portalPanel.projectConfigs
      .map(({ startLevel }, projectId) => startLevel || 0)
      .reduce((a, v) => a + v, 0)

    let leftProj = totalProj
    let badgeName
    for (let i = 0; i < GameDB.academy.badgeRequirement.length; i++) {
      const [req, name] = GameDB.academy.badgeRequirement[i]

      leftProj -= req
      if (leftProj < 0) {
        badgeName = name
        break
      }
    }

    if (leftProj < 0 && badgeName) {
      portalPanel.badgeRequirement.innerText = `To ${badgeName}: ${
        leftProj * -1
      } Proj`
    }
  } catch (e) {
    console.error(e)
  }
}
