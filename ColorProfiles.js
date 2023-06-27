let colorProfilePortal =
{
    verticalCells: 40,
    horizontalCells: 80,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 0.5,
    inputText: 1,
    activePage: 'default',
    pages: {
        list: ['default'],
        default: {
            initFunction: initColorProfile,
            updateFunction: updateColorProfile,
            headers: [
                {
                    text: 'Academy Projects',
                    top: 1, left: 1,
                    height: 3, width: 30
                }
            ],
            labels: [
                {
                    text: 'Unaffordable',
                    left: 2, top: 5,
                    height: 2, width: 10
                },
                {
                    text: 'Theoretical',
                    left: 2, top: 9,
                    height: 2, width: 10
                },
                {
                    text: 'Affordable',
                    left: 2, top: 13,
                    height: 2, width: 10
                },
                {
                    text: 'Selected',
                    left: 2, top: 17,
                    height: 2, width: 10
                }
            ],
            inputs: [
            ],
            checkboxes: [
            ],
            displays: [
            ],
            buttons: [
            ],
            toggles: [],
            lockboxes: [],
            selectors: [
                {
                    id: 'academyproj0',
                    left: 13, top: 4,
                    width: 4, height: 2,
                    function: selectColor
                },
                {
                    id: 'academyproj1',
                    left: 13, top: 8,
                    width: 4, height: 2,
                    function: selectColor
                },
                {
                    id: 'academyproj2',
                    left: 13, top: 12,
                    width: 4, height: 2,
                    function: selectColor
                },
                {
                    id: 'academyproj3',
                    left: 13, top: 16,
                    width: 4, height: 2,
                    function: selectColor
                }
            ]
        }
    }
};

colorProfilePortal.pages.default.dataLinkage =
{
    set academyproj0(value) { playerData.colorProfile.academyProjects[0] = value; },
    set academyproj1(value) { playerData.colorProfile.academyProjects[1] = value; },
    set academyproj2(value) { playerData.colorProfile.academyProjects[2] = value; },
    set academyproj3(value) { playerData.colorProfile.academyProjects[3] = value; },

    get academyproj0() { return playerData.colorProfile.academyProjects[0]; },
    get academyproj1() { return playerData.colorProfile.academyProjects[1]; },
    get academyproj2() { return playerData.colorProfile.academyProjects[2]; },
    get academyproj3() { return playerData.colorProfile.academyProjects[3]; }
}

const createButton = (label) => {
    return createElement('button', 'btn btn-secondary', { type: 'button', style: 'display: block; margin: 20px auto; min-width: 340px' }, label)
}

const pad = (number, length = 2) => {
    return `${number}`.padStart(length, '0')
}

const saveSettings = () => {
    const link = document.createElement('a');
    const file = new Blob([JSON.stringify(playerData)], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    const date = new Date()
    link.download = `cifiprojplanner-${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
}

const loadSettings = (e) => {
    const fileList = e.target.files[0]

    const loadFile = (file) => {
        return new Promise((resolve, reject) => {
            if (file.type && !file.type.startsWith('text/')) {
                reject()
                return
            }

            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                try {
                    const rawData = event.target.result
                    const data = JSON.parse(rawData)
                    if (!data.version) {
                        reject()
                        return
                    }

                    delete data.activePortal
                    SavePlayerData(data)
                    resolve()
                } catch (e) {
                    console.error(e)
                    reject()
                }
            });
            reader.readAsText(file);
        })
    }

    loadFile(e.target.files[0])
        .then(() => location.reload())
        .catch(() => alert('Load failed!'))
}

const resetSettings = () => {
    ResetPlayerData()
    location.reload()
}

function initColorProfile(panel)
{
    let cellSize = portalPanel.height / colorProfilePortal.verticalCells;
    let cssSheet = portalPanel.panelCSS.sheet;

    let colorProfile = playerData.colorProfile.academyProjects;

    for (let i = 0; i < 4; i++)
    {
        let selector = colorProfilePortal.pages.default.selectors[i];
        let newElem = document.createElement('input');
        newElem.type = 'color';
        newElem.value = playerData.colorProfile.academyProjects[i];
        portalPanel.elem.appendChild(newElem);
        newElem.classList.add(`selector`);
        newElem.id = selector.id;
        newElem.style.left = `${cellSize * selector.left}px`;
        newElem.style.top = `${cellSize * selector.top}px`;
        newElem.style.width = `${cellSize * selector.width}px`;
        newElem.style.height = `${cellSize * selector.height}px`;
        newElem.addEventListener('change', selector.function);
        portalPanel[selector.id] = newElem;
    }

    colorProfilePortal.pages.default.selectors.forEach(selector => {
    });

    let selector = `.selector`;
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * academyProjectPortal.displayText)}px;\n`,
        'margin: 0px;\n',
        'text-align: center;\n'
    ].join('');

    cssSheet.insertRule(`${selector} { ${properties} }`);

    const wrapper = createElement('div', 'section-2', { style: 'gap: 20px' })
    panel.appendChild(wrapper)

    const section = createElement('div', '', { style: 'padding: 20px' })
    wrapper.appendChild(section)

    const header = createElement('h3')
    header.innerHTML = 'Data <small class="text-body-secondary">(experimental)</small>'
    section.appendChild(header)

    const fileinput = createElement('input', '', {
        id: 'fileinput',
        type: 'file',
        style: 'display: none',
        accept: '.txt,.json',
    })
    section.appendChild(fileinput)
    // const load = createElement('label', 'form-label', null, 'Load Data and Reload app')
    const load = createButton('Load Data and Reload app')
    const save = createButton('Save Data')
    const reset = createButton('Reset Data and Reload app')

    load.addEventListener('click', () => fileinput.click())
    fileinput.addEventListener('change', loadSettings)
    save.addEventListener('click', saveSettings)
    reset.addEventListener('click', resetSettings)

    section.appendChild(load)
    section.appendChild(save)
    section.appendChild(reset)
}

function updateColorProfile()
{

}

function selectColor(e)
{
    portalPanel.dataLinkage[e.target.id] = e.target.value;
    SavePlayerData();
}
