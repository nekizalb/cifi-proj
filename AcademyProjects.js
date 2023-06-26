let academyProjectPortal =
{
    verticalCells: 48,
    horizontalCells: 96,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    activePage: 'default',
    pages: {
        list: ['default'],
        default: {
            headers: [],
            labels: [
                // {
                //     text: 'Run Time',
                //     left: 1, top: 1,
                //     height: 2, width: 6
                // },
                // {
                //     text: 'Level',
                //     left: 15, top: 5,
                //     height: 2, width: 5
                // },
                // {
                //     text: 'Goal',
                //     left: 22, top: 5,
                //     height: 2, width: 5
                // },
                // {
                //     text: 'Storage Facility',
                //     left: 4, top: 8,
                //     height: 2, width: 11
                // },
                // {
                //     text: 'Transfer Wires',
                //     left: 5, top: 12,
                //     height: 2, width: 10
                // },
                // {
                //     text: 'Bio-Mechanics Lab',
                //     left: 3, top: 16,
                //     height: 2, width: 12
                // },
                // {
                //     text: 'Exo-Energy',
                //     left: 7, top: 20,
                //     height: 2, width: 8
                // },
                // {
                //     text: 'Defensive Research',
                //     left: 1, top: 24,
                //     height: 2, width: 14
                // },
                // {
                //     text: 'Warp-Drive Lab',
                //     left: 5, top: 28,
                //     height: 2, width: 10
                // },
                // {
                //     text: 'Fuel Compression',
                //     left: 1, top: 32,
                //     height: 2, width: 14
                // },
                // {
                //     text: 'Quantum Weaponry',
                //     left: 1, top: 36,
                //     height: 2, width: 14
                // },
                // {
                //     text: 'Robo-Douglett',
                //     left: 1, top: 40,
                //     height: 2, width: 14
                // }
            ],
            inputs: [
                // {
                //     id: 'storagelevel',
                //     type: 'number',
                //     left: 16, top: 7.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'transferlevel',
                //     type: 'number',
                //     left: 16, top: 11.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'biomechlevel',
                //     type: 'number',
                //     left: 16, top: 15.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'exolevel',
                //     type: 'number',
                //     left: 16, top: 19.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'defensivelevel',
                //     type: 'number',
                //     left: 16, top: 23.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'warpdrivelevel',
                //     type: 'number',
                //     left: 16, top: 27.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'fuelcompresslevel',
                //     type: 'number',
                //     left: 16, top: 31.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'quantumlevel',
                //     type: 'number',
                //     left: 16, top: 35.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'douglettlevel',
                //     type: 'number',
                //     left: 16, top: 39.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'duration',
                //     type: 'number',
                //     left: 8, top: 0.25,
                //     width: 5, height: 2
                // }
            ],
            checkboxes: [],
            displays: [
                // {
                //     id: 'storagegoal',
                //     left: 24, top: 7.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'transfergoal',
                //     left: 24, top: 11.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'biomechgoal',
                //     left: 24, top: 15.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'exogoal',
                //     left: 24, top: 19.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'defensivegoal',
                //     left: 24, top: 23.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'warpdrivegoal',
                //     left: 24, top: 27.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'fuelcompressgoal',
                //     left: 24, top: 31.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'quantumgoal',
                //     left: 24, top: 35.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'douglettgoal',
                //     left: 24, top: 39.75,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'totalnew',
                //     left: 24, top: 43.75,
                //     height: 2, width: 6
                // }
            ],
            buttons: [],
            toggles: [
                // {
                //     id: 'runtime',
                //     settings: [
                //         {
                //             text: 'minute',
                //             color: '#FF8888'
                //         },
                //         {
                //             text: 'hour',
                //             color: '#88FF88'
                //         },
                //         {
                //             text: 'day',
                //             color: '#8888FF'
                //         }
                //     ],
                //     left: 14, top: 0.5,
                //     width: 9, height: 2
                // }
            ],
            setters: []
        }
    }
};

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

let projects = ['storage', 'transfer', 'biomech', 'exo', 'defensive', 'warpdrive', 'fuelcompress', 'quantum', 'douglett'];
let [initLeft, initTop] = [29, 7.25];
let [stepLeft, stepTop] = [2, 4];

// for (let level = 0; level < 30; level++)
// {
//     let numberObj =
//     {
//         text: level + 1,
//         left: initLeft + (stepLeft * level) - 0.75, top: 5,
//         width: 2, height: 2
//     };
//     academyProjectPortal.pages.default.labels.push(numberObj);
// }

for (let project = 0; project < projects.length; project++)
{
    for (let level = 0; level < 30; level++)
    {
        let setterObj =
        {
            id: `setter${projects[project]}${level+1}`,
            settings: [
                {
                    text: '',
                    color: '#444444',
                    cursor: 'not-allowed',
                },
                {
                    text: '',
                    color: '#CCCC44',
                    cursor: 'not-allowed',
                },
                {
                    text: '',
                    color: '#44CC44',
                    cursor: 'pointer',
                },
                {
                    text: '',
                    color: '#4444CC',
                    cursor: 'pointer',
                }
            ],
            left: initLeft + (stepLeft * level), top: initTop + (stepTop * project),
            width: 2, height: 2
        };
        academyProjectPortal.pages.default.setters.push(setterObj);
    }
}

academyProjectPortal.pages.default.dataLinkage =
{
    set duration(value) { playerData.academy.farmYieldSelected = value; },
    set storagelevel(value) { playerData.academy.projectLevels[0] = value; },
    set transferlevel(value) { playerData.academy.projectLevels[1] = value; },
    set biomechlevel(value) { playerData.academy.projectLevels[2] = value; },
    set exolevel(value) { playerData.academy.projectLevels[3] = value; },
    set defensivelevel(value) { playerData.academy.projectLevels[4] = value; },
    set warpdrivelevel(value) { playerData.academy.projectLevels[5] = value; },
    set fuelcompresslevel(value) { playerData.academy.projectLevels[6] = value; },
    set quantumlevel(value) { playerData.academy.projectLevels[7] = value; },
    set douglettlevel(value) { playerData.academy.projectLevels[8] = value; },

    get duration() { return playerData.academy.farmYieldSelected || '1-h'; },
    get storagelevel() { return playerData.academy.projectLevels[0]; },
    get transferlevel() { return playerData.academy.projectLevels[1]; },
    get biomechlevel() { return playerData.academy.projectLevels[2]; },
    get exolevel() { return playerData.academy.projectLevels[3]; },
    get defensivelevel() { return playerData.academy.projectLevels[4]; },
    get warpdrivelevel() { return playerData.academy.projectLevels[5]; },
    get fuelcompresslevel() { return playerData.academy.projectLevels[6]; },
    get quantumlevel() { return playerData.academy.projectLevels[7]; },
    get douglettlevel() { return playerData.academy.projectLevels[8]; }
};

academyProjectPortal.pages.default.initFunction = function(panel)
{
    let cellSize = portalPanel.height / academyProjectPortal.verticalCells;
    let colorProfile = playerData.colorProfile.academyProjects;

    const wrapper = createElement('div', 'section-2')
    const section = createElement('div')
    const unit = createElement('div', 'row g-3')
    unit.innerHTML = '<div class="col-auto"><label class="col-form-label">duration</label></div>'
    const col = createElement('div', 'col-auto')
    unit.appendChild(col)
    const select = createElement('select', 'form-select', {
        id: 'duration',
    })
    select.innerHTML = durationOptions.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')
    select.value = playerData.academy.farmYieldSelected || '1-h'
    select.addEventListener('change', portalPanel.updateFunction);
    portalPanel['duration'] = select;
    col.appendChild(select);
    section.appendChild(unit)

    const table = createElement('table', 'table table-borderless table-project', { style: 'margin-top: 20px' })
    table.innerHTML = '<thead><tr><th></th><th>Level</th><th></th>' + Array(maxProjects).fill(null).map((_, i) => `<th>${i+1}</th>`).join('') + '</tr></thead>'

    const tbody = document.createElement('tbody')
    table.appendChild(tbody)

    projData.forEach(([name, input, display], projectIndex) => {
        const row = createElement('tr')
        row.appendChild(createElement('td', 'text-end field-projname', null, name))

        const tdinput = createElement('td')
        const i = createElement('input', 'form-control form-control-sm text-center', {
            id: input,
            type: 'number',
            style: 'width: 65px',
            value: portalPanel.dataLinkage[input],
        })
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
            });
            p.dataset.setting = 0;
            p.dataset.wrap = 4;
            p.addEventListener('click', portalPanel.updateFunction);
            portalPanel[pid] = p;
            pc.appendChild(p)
            row.appendChild(pc);
        }

        tbody.appendChild(row)

        const costRow = createElement('tr')
        costRow.appendChild(createElement('td', 'field-projcost'))
        const costId = display.replace('goal', 'cost')
        const costCell = createElement('td', 'field-projcost font-normal', {
            id: costId,
            colSpan: 32,
        })
        portalPanel[costId] = costCell;
        costRow.appendChild(costCell)
        tbody.appendChild(costRow)
    })

    const datarow = createElement('tr', '', { style: 'font-size: 0.8em;' })

    const badgecell = createElement('td', '', { colSpan: 2 })
    portalPanel.badgeRequirement = badgecell

    const datacell = createElement('td', '', { colSpan: 13 })
    const projectnumdata = createElement('label', 'd-inline-block', { id: 'totalnew', style: 'margin-right: 20px'})
    portalPanel.totalnew = projectnumdata
    datacell.appendChild(projectnumdata)
    const bpnumdata = createElement('label', 'd-inline-block', { id: 'bpnew', style: 'margin-right: 20px'})
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

    wrapper.appendChild(section)
    panel.appendChild(wrapper)

    // academyProjectPortal.pages.default.setters.forEach(setter => {
    //     let newElem = document.createElement('label');
    //     portalPanel.elem.appendChild(newElem);
    //     newElem.classList.add(`setter`);
    //     newElem.id = setter.id;
    //     newElem.dataset.setting = 0;
    //     newElem.dataset.wrap = setter.settings.length;
    //     newElem.style.left = `${cellSize * setter.left}px`;
    //     newElem.style.top = `${cellSize * setter.top}px`;
    //     newElem.style.width = `${cellSize * setter.width}px`;
    //     newElem.style.height = `${cellSize * setter.height}px`;
    //     newElem.addEventListener('click', portalPanel.updateFunction);
    //     portalPanel[setter.id] = newElem;
    // });

    let selector = `.setter`;
    let properties =
    [
        // 'position: absolute;\n',
        `font-size: ${Math.round(cellSize * academyProjectPortal.displayText)}px;\n`,
        `width: 20px;`,
        `height: 20px;`,
        'margin: 0px;\n',
        'text-align: center;\n'
    ].join('');

    portalPanel.panelCSS.sheet.insertRule(`${selector} { ${properties} }`);

    let initSetter = academyProjectPortal.pages.default.setters[0];
    for (let j = 0; j < initSetter.settings.length; j++)
    {
        selector = `.setter[data-setting="${j}"]`;
        properties =
        [
            `cursor: ${initSetter.settings[j].cursor};`,
            `text-shadow: 0px 0px ${Math.round(cellSize * academyProjectPortal.labelText / 9)}px ${colorProfile[j]};\n`,
            `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px ${colorProfile[j]}, inset 0px 0px ${Math.round(cellSize)}px ${colorProfile[j]};\n`
        ].join('');

        portalPanel.panelCSS.sheet.insertRule(`${selector} { ${properties} }`);
    }

    // let setting = playerData.academy.farmYieldSetting.type;
    // portalPanel.runtime.dataset.setting = setting;
    // portalPanel.runtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[setting].text + (playerData.academy.farmYieldSetting.duration > 1 ? 's' : '');;

    // for (let project = 0; project < projects.length; project++)
    // {
    //     for (let level = 0; level < 30; level++)
    //     {
    //         portalPanel[`setter${projects[project]}${level+1}`].dataset.setting = 0;
    //     }
    // }

    generateRunYield();
    UpdateRequirement();
}

academyProjectPortal.pages.default.updateFunction = function(e)
{
    if (e.target.id.includes('duration'))
    {
        portalPanel.dataLinkage[e.target.id] = e.target.value;
        SavePlayerData();

        // let currentSetting = playerData.academy.farmYieldSetting.type;
        // portalPanel.runtime.innerText = academyProjectPortal.pages.default.toggles[0].settings[currentSetting].text + (playerData.academy.farmYieldSetting.duration > 1 ? 's' : '');

        generateRunYield();

        return;
    }

    if (e.target.id.includes('setter'))
    {
        let id = e.target.id;
        let setting = e.target.dataset.setting;

        if (setting > 1)
        {
            let level = parseInt(id.substr(-1));
            let project = id.substring(6, id.length - 1);
            if (parseInt(id.substr(-2)))
            {
                level = parseInt(id.substr(-2));
                project = id.substring(6, id.length - 2);
            }
            switch (project)
            {
                case 'storage': project = 0; break;
                case 'transfer': project = 1; break;
                case 'biomech': project = 2; break;
                case 'exo': project = 3; break;
                case 'defensive': project = 4; break;
                case 'warpdrive': project = 5; break;
                case 'fuelcompress': project = 6; break;
                case 'quantum': project = 7; break;
                case 'douglett': project = 8; break;

            }
            setProjectLevel(project, level, setting);
        }

        return;
    }

    portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
    SavePlayerData();

    generateRunYield();
    UpdateRequirement();
}

function generateRunYield()
{
    portalPanel.storehouse = new StoreHouse(CalculateFarmYields(true).matYield);
    portalPanel.projectConfigs = [];
    portalPanel.theoreticals = [];
    for (let projectID = 0; projectID < projects.length; projectID++)
    {
        const config = new ProjectConfig(projectID, playerData.academy.projectLevels[projectID])
        portalPanel.projectConfigs.push(config);
        let maxLevel = portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse).newLevels;
        portalPanel.theoreticals.push(Math.min(maxLevel, 30));
        for (let level = 1; level <= 30; level++)
        {
            if (portalPanel[`setter${projects[projectID]}${level}`]) {
                portalPanel[`setter${projects[projectID]}${level}`].dataset.setting = (level <= maxLevel ? 2 : 0);
            }
        }
        portalPanel[`${projects[projectID]}goal`].innerText = portalPanel.projectConfigs[projectID].currentLevel;
        portalPanel[`${projects[projectID]}cost`].innerHTML = 'Current Cost: ' + config.getStartCost().map((v, i) => {
            if (!v) return ''
            return `<div class="field-projmat">${GameDB.academy.materials[i]}: ${formatLargeInteger(v)}</div>`
        }).join('')
    }

    portalPanel.totalnew.innerText = '+ 0 proj';
    portalPanel.bpnew.innerText = '+ 0 bp';

    resumeLevels();
}

function setProjectLevel(project, level, setting)
{
    portalPanel.projectConfigs[project].currentLevel = portalPanel.projectConfigs[project].startLevel + level - (setting === "3");
    playerData.academy.projectGoals[project] = level - (setting === "3");
    SavePlayerData();

    let totalNew = 0;
    let newBp = 0;

    for (let i = 0; i < portalPanel.storehouse.mats.length; i++)
    {
        portalPanel.storehouse.spent[i] = 0;
    }
    for (let i = 0; i < projects.length; i++)
    {
        let projectCosts = portalPanel.projectConfigs[i].currentCost;
        console.log(`Project: ${projects[i]}`);
        for (let mat = 0; mat < 8; mat++)
        {
            // console.log(portalPanel.storehouse.spent[mat].toExponential(2) + ' + ' + projectCosts[mat].toExponential(2));
            portalPanel.storehouse.spent[mat] += projectCosts[mat];
            // console.log('= ' + portalPanel.storehouse.spent[mat].toExponential(2));
        }

        totalNew += (portalPanel.projectConfigs[i].currentLevel - portalPanel.projectConfigs[i].startLevel)
        newBp += portalPanel.projectConfigs[i].gainedBp
    }

    portalPanel.totalnew.innerText = `+ ${totalNew} proj`;
    portalPanel.bpnew.innerText = `+ ${newBp} bp`;

    for (let projectID = 0; projectID < projects.length; projectID++)
    {
        let currentLevel = portalPanel.projectConfigs[projectID].currentLevel - portalPanel.projectConfigs[projectID].startLevel;
        let maxLevel = portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse).newLevels + currentLevel;
        let theoretical = portalPanel.theoreticals[projectID];
        for (let setLevel = 1; setLevel <= theoretical; setLevel++)
        {
            let setting = 0;
            if (setLevel <= currentLevel) setting = 3;
            else if (setLevel <= maxLevel) setting = 2;
            else if (setLevel <= theoretical) setting = 1;

            if (portalPanel[`setter${projects[projectID]}${setLevel}`]) {
                portalPanel[`setter${projects[projectID]}${setLevel}`].dataset.setting = setting;
            }
        }
        portalPanel[`${projects[projectID]}goal`].innerText = portalPanel.projectConfigs[projectID].currentLevel;
    }
}

function resumeLevels()
{
    let prevLevels = playerData.academy.projectGoals;

    let overspent = false;
    let totalNew = 0;
    let newBp = 0;

    for (let i = 0; i < projects.length; i++)
    {
        portalPanel.projectConfigs[i].currentLevel = prevLevels[i] + portalPanel.projectConfigs[i].startLevel;
        let projectCosts = portalPanel.projectConfigs[i].currentCost;

        for (let mat = 0; mat < 8; mat++)
        {
            portalPanel.storehouse.spent[mat] += projectCosts[mat];
            if (portalPanel.storehouse.spent[mat] > portalPanel.storehouse.mats[mat])
            {
                overspent = true;
                break;
            }
        }

        if (overspent) break;

        totalNew += (portalPanel.projectConfigs[i].currentLevel - portalPanel.projectConfigs[i].startLevel)
        newBp += portalPanel.projectConfigs[i].gainedBp
    }

    if (overspent)
    {
        for (let i = 0; i < projects.length; i++)
        {
            portalPanel.projectConfigs[i].currentLevel = portalPanel.projectConfigs[i].startLevel;
            playerData.academy.projectGoals[i] = 0;
        }
        for (let i = 0; i < 8; i++)
        {
            portalPanel.storehouse.spent[i] = 0;
        }
        return;
    }

    for (let projectID = 0; projectID < projects.length; projectID++)
    {
        let currentLevel = portalPanel.projectConfigs[projectID].currentLevel - portalPanel.projectConfigs[projectID].startLevel;
        let maxLevel = portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse).newLevels + currentLevel;
        let theoretical = portalPanel.theoreticals[projectID];
        for (let setLevel = 1; setLevel <= theoretical; setLevel++)
        {
            let setting = 0;
            if (setLevel <= currentLevel) setting = 3;
            else if (setLevel <= maxLevel) setting = 2;
            else if (setLevel <= theoretical) setting = 1;

            if (portalPanel[`setter${projects[projectID]}${setLevel}`]) {
                portalPanel[`setter${projects[projectID]}${setLevel}`].dataset.setting = setting;
            }
        }
        portalPanel[`${projects[projectID]}goal`].innerText = portalPanel.projectConfigs[projectID].currentLevel;
    }

    portalPanel.totalnew.innerText = `+ ${totalNew} proj`;
    portalPanel.bpnew.innerText = `+ ${newBp} bp`;
}

function UpdateRequirement() {
    try {
        const totalBp = portalPanel.projectConfigs.map(({ startLevel }, projectId) => (startLevel || 0) * GameDB.academy.projects[projectId].bpCount)
            .reduce((a, v) => a + v, 0)

        let currentBp = totalBp
        let neededBp = 0
        let currentCm = 0

        for (let i = 0; i < GameDB.academy.bpRequirements.length; i++) {
            neededBp = GameDB.academy.bpRequirements[i]
            currentCm = i + 1
            if (currentBp >= neededBp) {
                currentBp -= neededBp
            } else {
                break
            }
        }

        // can predict when cm > 12
        if (currentCm > 12) {
            portalPanel.bpRequirement.innerText = `Current BP: ${currentBp} / ${neededBp}`
        }
    } catch (e) {
        console.error(e)
    }

    try {
        portalPanel.badgeRequirement.innerText = ''

        const totalProj = portalPanel.projectConfigs.map(({ startLevel }, projectId) => (startLevel || 0))
            .reduce((a, v) => a + v, 0)

        let leftProj = totalProj
        let badgeName
        for (let i = 0; i < GameDB.academy.badgeRequirement.length; i++) {
            const [req, name] = GameDB.academy.badgeRequirement[i]

            leftProj -= req
            if (leftProj < 0) {
                badgeName = name
                break;
            }
        }

        if (leftProj < 0 && badgeName) {
            portalPanel.badgeRequirement.innerText = `To ${badgeName}: ${leftProj * -1} Proj`
        }
    } catch (e) {
        console.error(e)
    }
}
