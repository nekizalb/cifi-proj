let durationOptions = [
    ['1-h', '1 Hour'],
    ['2-h', '2 Hours'],
    ['4-h', '4 Hours'],
    ['6-h', '6 Hours'],
    ['12-h', '12 Hours'],
    ['18-h', '18 Hours'],
    ['1-d', '1 Day'],
    ['2-d', '2 Days'],
    ['3-d', '3 Days'],
    ['4-d', '4 Days'],
    ['5-d', '5 Days'],
    ['7-d', '7 Days'],
    ['10-d', '10 Days'],
]

let academyFarmPortal =
{
    verticalCells: 58,
    horizontalCells: 116,
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
            labels: [],
            inputs: [],
            checkboxes: [],
            displays: [],
            buttons: [],
            toggles: [],
            lockboxes: [],
        }
    }
};

academyFarmPortal.pages.default.dataLinkage =
{
    set podspower(value) { playerData.academy.personnel[0].power = value; },
    set podsowned(value) { playerData.academy.personnel[0].population = value; },
    set fireteamspower(value) { playerData.academy.personnel[1].power = value; },
    set fireteamsowned(value) { playerData.academy.personnel[1].population = value; },
    set titanspower(value) { playerData.academy.personnel[2].power = value; },
    set titansowned(value) { playerData.academy.personnel[2].population = value; },
    set corvettespower(value) { playerData.academy.personnel[3].power = value; },
    set corvettesowned(value) { playerData.academy.personnel[3].population = value; },
    set duration(value) { playerData.academy.farmYieldSelected = value; },
    set ap(value) { playerData.academy.ap = value; },
    set difar(value) { playerData.academy.stock[0] = value; },
    set kento(value) { playerData.academy.stock[1] = value; },
    set chromium(value) { playerData.academy.stock[2] = value; },
    set exon(value) { playerData.academy.stock[3] = value; },
    set organium(value) { playerData.academy.stock[4] = value; },
    set adamorphium(value) { playerData.academy.stock[5] = value; },
    set moskom(value) { playerData.academy.stock[6] = value; },
    set darkseid(value) { playerData.academy.stock[7] = value; },

    get podspower() { return playerData.academy.personnel[0].power; },
    get podsowned() { return playerData.academy.personnel[0].population; },
    get fireteamspower() { return playerData.academy.personnel[1].power; },
    get fireteamsowned() { return playerData.academy.personnel[1].population; },
    get titanspower() { return playerData.academy.personnel[2].power; },
    get titansowned() { return playerData.academy.personnel[2].population; },
    get corvettespower() { return playerData.academy.personnel[3].power; },
    get corvettesowned() { return playerData.academy.personnel[3].population; },
    get duration() { return playerData.academy.farmYieldSelected || '1-h'; },
    get ap() { return playerData.academy.ap; },
    get difar() { return playerData.academy.stock[0]; },
    get kento() { return playerData.academy.stock[1]; },
    get chromium() { return playerData.academy.stock[2]; },
    get exon() { return playerData.academy.stock[3]; },
    get organium() { return playerData.academy.stock[4]; },
    get adamorphium() { return playerData.academy.stock[5]; },
    get moskom() { return playerData.academy.stock[6]; },
    get darkseid() { return playerData.academy.stock[7]; }
};

// Adding farm personnel linkages
for (let planet = 0; planet < GameDB.academy.planets; planet++)
{
    for (let farm = 0; farm < 3; farm++)
    {
        let propertyName = `farm${planet}${farm}pods`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].pods = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].pods;
            }
        });

        propertyName = `farm${planet}${farm}fireteams`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].fireteams = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].fireteams;
            }
        });

        propertyName = `farm${planet}${farm}titans`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].titans = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].titans;
            }
        });

        propertyName = `farm${planet}${farm}corvettes`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].corvettes = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].corvettes;
            }
        });

        propertyName = `farm${planet}${farm}lock`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].locked = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].locked;
            }
        });
    }
}

const createElement = (tag = 'div', className = '', attr = {}, innerText = '') => {
    const ele = document.createElement(tag)
    Object.assign(ele, { className, ...attr })
    ele.innerText = innerText
    return ele
}

academyFarmPortal.pages.default.initFunction = function(panel)
{
    const flex = createElement('div', 'section-2')
    const flex2 = createElement('div', 'section-2')

    const createPersonel = () => {
        const section = createElement()
        const header = createElement('h3', null, null, 'Personnel')
        section.appendChild(header)

        const table = createElement('table', 'table table-borderless')
        table.innerHTML = '<thead><tr><th></th><th>Power</th><th>Owned</th></tr></thead>'

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const personnels = [
            { id: 'pods', label: 'mining pods', },
            { id: 'fireteams', label: 'fireteams' },
            { id: 'titans', label: 'titans' },
            { id: 'corvettes', label: 'corvettes' },
        ]

        personnels.forEach((personnel) => {
            const row = document.createElement('tr')
            tbody.appendChild(row)

            const c1 = createElement('td', 'text-end', null,  personnel.label)
            row.appendChild(c1)

            const c2 = createElement('td')
            row.appendChild(c2)
            const power = createElement('input', 'form-control form-control-sm text-center', {
                id: personnel.id + 'power',
                type: 'number',
                style: 'width: 70px',
                value: portalPanel.dataLinkage[personnel.id + 'power']
            })
            power.addEventListener('change', portalPanel.updateFunction);
            portalPanel[power.id] = power;
            c2.appendChild(power)

            const c3 = createElement('td')
            row.appendChild(c3)
            const owned = createElement('input', 'form-control form-control-sm text-center', {
                id: personnel.id + 'owned',
                type: 'number',
                style: 'width: 90px',
                value: portalPanel.dataLinkage[personnel.id + 'owned']
            })
            owned.addEventListener('change', portalPanel.updateFunction);
            portalPanel[owned.id] = owned;
            c3.appendChild(owned)
        })

        section.appendChild(table)
        return section
    }

    const createFarms = () => {
        const section = createElement()
        const header = createElement('h3', null, null, 'Farms')
        section.appendChild(header)

        const table = document.createElement('table')
        table.className = 'table table-borderless'
        table.innerHTML = '<thead><tr><th>Farm</th><th>Total</th><th></th><th class="text-center">Pod</th><th class="text-center">Fire</th><th class="text-center">Titan</th><th class="text-center">Corv</th><th>Run time</th></tr></thead>'

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        for (let plannet = 0; plannet < 3; plannet++) {
            for (let farm = 0; farm < 3; farm ++) {
                const row = createElement('tr')
                row.appendChild(createElement('td', 'text-end', null, `${plannet+1}-${farm+1}`))
                const total = createElement('td', 'text-end', {
                    id: `farm${plannet}${farm}total`,
                })
                portalPanel[`farm${plannet}${farm}total`] = total
                row.appendChild(total)

                const lockId = `farm${plannet}${farm}lock`
                const lockCell = createElement('td')
                let lockContainer = createElement('label', 'lockcontainer');
                let lockBox = createElement('input', '', {
                    id: lockId,
                    type: 'checkbox',
                    checked: portalPanel.dataLinkage[lockId],
                });
                lockBox.addEventListener('change', portalPanel.updateFunction);

                lockContainer.appendChild(lockBox)
                lockContainer.appendChild(createElement('div', 'lockmark'))
                lockCell.appendChild(lockContainer)
                row.appendChild(lockCell)

                GameDB.academy.personnel.forEach((p) => {
                    const cell = createElement('td')
                    const e = createElement('input', 'form-control text-center', {
                        id: `farm${plannet}${farm}${p}`,
                        type: 'number',
                        style: 'width: 80px',
                        placeholder: '0',
                        value: portalPanel.dataLinkage[`farm${plannet}${farm}${p}`]
                    })
                    portalPanel[`farm${plannet}${farm}${p}`] = e
                    e.addEventListener('change', portalPanel.updateFunction);

                    cell.append(e)
                    row.appendChild(cell)
                })
                const time = createElement('td', 'font-normal', {
                    id: `farm${plannet}${farm}time`,
                })
                portalPanel[`farm${plannet}${farm}time`] = time
                row.appendChild(time)

                tbody.appendChild(row)

                const row2 = createElement('tr')
                row2.appendChild(createElement('td', '', { colSpan: 3 }))
                const mat = createElement('td', 'data-material', {
                    id: `farm${plannet}${farm}mat`,
                    colSpan: 5,
                })
                portalPanel[`farm${plannet}${farm}mat`] = mat
                row2.appendChild(mat)

                tbody.appendChild(row2)
            }
        }

        section.appendChild(table)

        const assignButton = createElement('button', 'btn btn-secondary', { type: 'button', style: 'display: block; margin: 20px auto; min-width: 300px' }, 'Maximize Mission Rate')
        assignButton.addEventListener('click', maximizeMissionRate)
        section.append(assignButton)

        const clearButton = createElement('button', 'btn btn-secondary', { type: 'button', style: 'display: block; margin: 20px auto; min-width: 300px' }, 'Clear Missions')
        clearButton.addEventListener('click', clearMissions)
        section.append(clearButton)

        return section
    }

    const createResult = () => {
        const section = createElement()
        section.appendChild(createElement('h3', null, null, 'Result'))

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

        const table = document.createElement('table')
        table.className = 'table table-borderless'
        table.style = 'margin-top: 20px'
        table.innerHTML = '<thead><tr><th></th><th class="text-center">Stock</th><th class="text-center">Yield</th></tr></thead>'

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const rowData = [
            ['Missions', null, 'missionyield'],
            ['Difar', 'difar', 'difaryield'],
            ['Kento', 'kento', 'kentoyield'],
            ['Chromium', 'chromium', 'chromiumyield'],
            ['Exon', 'exon', 'exonyield'],
            ['Organium', 'organium', 'organiumyield'],
            ['Adamorphium', 'adamorphium', 'adamorphiumyield'],
            ['Moskom', 'moskom', 'moskomyield'],
            ['Darkseid', 'darkseid', 'darkseidyield'],
        ]
        rowData.forEach(([label, input, display]) => {
            const row = createElement('tr')
            row.appendChild(createElement('td', 'text-end', null, label))

            if (input) {
                const td = createElement('td')
                const e = createElement('input', 'form-control text-center', {
                    id: input,
                    type: 'text',
                    style: 'width: 110px',
                    value: portalPanel.dataLinkage[input],
                })
                e.addEventListener('change', portalPanel.updateFunction);
                td.appendChild(e)
                row.appendChild(td)
            } else {
                row.appendChild(createElement('td'))
            }

            const d = createElement('td', 'text-end font-normal', {
                id: display,
            })
            portalPanel[display] = d;
            row.appendChild(d)

            tbody.appendChild(row)
        })

        section.appendChild(table)

        return section
    }

    const createZeusRank = () => {
        const section = createElement()
        section.appendChild(createElement('h3', null, null, 'Zeus'))

        const rankt = createElement('table', 'table table-borderless', { style: 'margin-top: 20px' })
        rankt.innerHTML = `
            <thead><tr>
                <th>Rank</th>
                <th class="text-center">Req</th>
                <th class="text-center">Time</th>
                <th class="text-center">Total</th>
            </tr></thead>`
        const rankBody = createElement('tbody')
        portalPanel.rankTable = rankBody
        rankt.appendChild(rankBody)

        section.appendChild(rankt)

        return section
    }

    const createProduction = () => {
        const section = createElement()
        section.appendChild(createElement('h3', null, null, 'Production'))
        const flexWrapper = createElement('div', null, { style: 'display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; max-width: 700px; justify-content: space-around;'})
        section.appendChild(flexWrapper)

        const list = [
            { id: 'missionProd', title: 'Mission Count' },
            { id: 'difarProd', title: 'Difar' },
            { id: 'kentoProd', title: 'Kento' },
            { id: 'chromiumProd', title: 'Chromium' },
            { id: 'exonProd', title: 'Exon' },
            { id: 'organiumProd', title: 'Organium' },
            { id: 'adamorphiumProd', title: 'Adamorphium' },
            { id: 'moskomProd', title: 'Moskom' },
            { id: 'darkseidProd', title: 'Darkseid' },
        ]

        list.forEach(({ id, title }) => {
            const wrapper = createElement('div')
            wrapper.appendChild(createElement('h5', null, null, title))
            const table = createElement('table', 'table table-borderless', { style: 'margin-top: 20px' })
            table.innerHTML = `
                <thead><tr>
                    <th class="text-center">Farm</th>
                    <th class="text-end">Contri.</th>
                    <th class="text-end">%</th>
                </tr></thead>`
            const body = createElement('tbody')
            portalPanel[id] = body
            table.appendChild(body)

            wrapper.appendChild(table)

            flexWrapper.appendChild(wrapper)
        })

        return section
    }

    flex.appendChild(createPersonel())
    flex.appendChild(createFarms())
    flex2.appendChild(createResult())
    flex2.appendChild(createZeusRank())
    flex2.appendChild(createProduction())
    panel.appendChild(flex)
    panel.appendChild(flex2)

    PopulateTiming();
    populateYield();
}

academyFarmPortal.pages.default.updateFunction = function(e)
{
    if (e.target.id.includes('lock'))
    {
        portalPanel.dataLinkage[e.target.id] = e.target.checked;
        SavePlayerData();
        return;
    }

    if (e.target.id.includes('duration'))
    {
        portalPanel.dataLinkage[e.target.id] = e.target.value;
        SavePlayerData();

        PopulateTiming();
        populateYield();

        return;
    }

    if (e.target.id.includes('power'))
    {
        portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value);
        SavePlayerData();

        PopulateTiming();
        populateYield();

        return;
    }

    if (e.target.classList.contains('toggle'))
    {
        let currentSetting = parseInt(e.target.dataset.setting);
        let wrap = parseInt(e.target.dataset.wrap);
        currentSetting++;
        currentSetting = currentSetting % wrap;
        e.target.dataset.setting = currentSetting;

        portalPanel.dataLinkage[e.target.id] = currentSetting;
        portalPanel.yieldtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[currentSetting].text;
        portalPanel.yieldtimeco.innerText = academyFarmPortal.pages.default.toggles[0].settings[currentSetting].text + 's';

        let duration = playerData.academy.farmYieldSetting.duration;
        if (currentSetting === 0)
        {
            duration *= (60 * 24);
        }
        else if (currentSetting === 1)
        {
            duration /= 60;
        }
        else
        {
            duration /= 24;
        }
        duration = Math.round(duration * 1000) / 1000;

        playerData.academy.farmYieldSetting.duration = duration;
        portalPanel.duration.value = duration;

        SavePlayerData();

        populateYield();

        return;
    }

    if (e.target.type === 'number')
    {
        portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
        SavePlayerData();

        if (e.target.id === 'rankcurrent') { portalPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage[e.target.id]]; }

        PopulateTiming();
        populateYield();

        return;
    }

    let value = parseBigNum(e.target.value);
    if (isNaN(value)) {e.target.value = 0}
    else {portalPanel.dataLinkage[e.target.id] = value}
    SavePlayerData();

    populateYield();
}

function PopulateTiming()
{
    let farmData = CalculateFarmTimes();
    const matBonus = GetCurrentMatBonus()

    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            let datum = farmData[planet * 3 + farm];
            portalPanel[`farm${planet}${farm}total`].innerText = datum.personnel;
            portalPanel[`farm${planet}${farm}time`].innerText = datum.time;
            portalPanel[`farm${planet}${farm}time`].classList.toggle('is-capped', datum.isCapped)
            portalPanel[`farm${planet}${farm}mat`].innerText = GameDB.academy.farms[planet * 3 + farm].baseMats.map((a, i) => {
                if (a === 0) return null
                const mat = matBonus * a
                return GameDB.academy.materials[i] + ': ' + (mat > 1000 ? mat.toExponential(2) : mat)
            }).filter(Boolean).join(', ')
        }
    }
}

function maximizeMissionRate()
{
    GetMaxMissionRate();

    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            for (let personnel = 0; personnel < 4; personnel++)
            {
                let type = GameDB.academy.personnel[personnel];
                portalPanel[`farm${planet}${farm}${type}`].value = portalPanel.dataLinkage[`farm${planet}${farm}${type}`];
            }
        }
    }

    populateYield();
    PopulateTiming();
}

function clearMissions()
{
    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            if (playerData.academy.farms[planet][farm].locked) continue;

            for (let personnel = 0; personnel < 4; personnel++)
            {
                let type = GameDB.academy.personnel[personnel];
                portalPanel.dataLinkage[`farm${planet}${farm}${type}`] = 0;
                portalPanel[`farm${planet}${farm}${type}`].value = 0;
            }
        }
    }

    SavePlayerData();
    populateYield();
    PopulateTiming();
}

function populateYield()
{
    let yieldData = CalculateFarmYields();
    console.log(yieldData)
    let duration = yieldData.duration

    yieldData.matYield = yieldData.matYield.map(yieldValue => {
        if (yieldValue > 1000)
        {
            yieldValue = yieldValue.toExponential(2)
        }
        else
        {
            yieldValue = yieldValue;
        }
        return yieldValue;
    });

    portalPanel.missionyield.innerText = formatInteger(yieldData.missionYield);
    portalPanel.difaryield.innerText = yieldData.matYield[0];
    portalPanel.kentoyield.innerText = yieldData.matYield[1];
    portalPanel.chromiumyield.innerText = yieldData.matYield[2];
    portalPanel.exonyield.innerText = yieldData.matYield[3];
    portalPanel.organiumyield.innerText = yieldData.matYield[4];
    portalPanel.adamorphiumyield.innerText = yieldData.matYield[5];
    portalPanel.moskomyield.innerText = yieldData.matYield[6];
    portalPanel.darkseidyield.innerText = yieldData.matYield[7];

    try {
        genZeusRank(yieldData.missionYield, duration)
        genProduction(portalPanel.missionProd, yieldData.missionContrib)
        genProduction(portalPanel.difarProd, yieldData.matContrib[0])
        genProduction(portalPanel.kentoProd, yieldData.matContrib[1])
        genProduction(portalPanel.chromiumProd, yieldData.matContrib[2])
        genProduction(portalPanel.exonProd, yieldData.matContrib[3])
        genProduction(portalPanel.organiumProd, yieldData.matContrib[4])
        genProduction(portalPanel.adamorphiumProd, yieldData.matContrib[5])
        genProduction(portalPanel.moskomProd, yieldData.matContrib[6])
        genProduction(portalPanel.darkseidProd, yieldData.matContrib[7])
    } catch (e) {
        console.error(e)
    }
}

function formatTime(time) {
    if (time > 3600 * 24) {
        return `${(time / 3600 / 24).toFixed(2)} days`
    }

    if (time > 3600) {
        const hour = Math.floor(time / 3600)
        const min = Math.floor((time % 3600) / 60)
        return `${hour} hr${hour > 1 ? 's' : ''} ${min} min${min > 1 ? 's' : ''}`
    }

    if (time > 60) {
        const min = Math.floor(time / 60)
        const sec = Math.floor((time % 60))
        return `${min} min${min > 1 ? 's' : ''} ${sec} sec${sec > 1 ? 's' : ''}`
    }

    const sec = Math.floor(time)

    return `${sec} sec${sec > 1 ? 's' : ''}`
}

function genZeusRank(missionCount, duration) {
    const container = portalPanel.rankTable
    container.innerHTML = ''

    let missionLeft = missionCount
    let rankProgress = playerData.fleet.zeus.rank.progress;
    let yieldRank = playerData.fleet.zeus.rank.current;

    let breaker = 20

    let totalTime = 0

    while ((rankProgress + missionLeft) > 0 && breaker-- > 0) {
        if ((rankProgress + missionLeft) >= GameDB.fleet.zeus.rankRequirements[yieldRank]) {
            let requirement = GameDB.fleet.zeus.rankRequirements[yieldRank];
            if (rankProgress > 0) {
                requirement -= rankProgress
                rankProgress = 0
            }

            missionLeft -= requirement
            yieldRank++;
            // console.log('missionLeft', missionLeft)
            // console.log('requirement', requirement)

            const row = createElement('tr')
            row.appendChild(createElement('td', '', null, yieldRank))
            const time = requirement / missionCount * duration
            row.appendChild(createElement('td', 'text-end font-normal', null, formatInteger(requirement)))
            row.appendChild(createElement('td', 'text-end font-normal', null, formatTime(time)))
            totalTime += time
            row.appendChild(createElement('td', 'text-end font-normal', null, formatTime(totalTime)))

            container.appendChild(row)
        }
    }
}

function genProduction(table, contrib) {
    try {
        const farms = Object.keys(contrib).sort((a, b) => a < b ? -1 : 1)
        const total = Object.values(contrib).reduce((a, v) => a + v, 0)

        table.innerHTML = ''

        if (farms.length === 0) {
            table.innerHTML = '' // TODO
            return
        }

        farms.forEach((farm) => {
            const c = contrib[farm]

            if (c === 0) return

            const row = createElement('tr')
            const farmname = createElement('td', 'text-center', null, farm.split('').join('-'))
            const value = createElement('td', 'text-end font-normal', null, c > 1000000 ? c.toExponential(2) : c)
            const percent = createElement('td', 'text-end font-normal', null, (c / total * 100).toFixed(2) + '%')
            // const eff = createElement('td', 'text-end')

            row.appendChild(farmname)
            row.appendChild(value)
            row.appendChild(percent)
            // row.appendChild(eff)
            table.appendChild(row)
        })
    } catch (e)  {
        console.error(e)
    }
}
