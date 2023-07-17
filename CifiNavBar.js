let portals = {
  academyEffector: academyEffectorPortal,
  academyFarm: academyFarmPortal,
  academyProject: academyProjectPortal,
  settings: settingsPortal,
}

const validPortals = Object.keys(portals)

playerData.activePortal = validPortals.includes(playerData.activePortal)
  ? playerData.activePortal
  : validPortals[0]
let activePortal = portals[playerData.activePortal]

function reDim() {
  destroyPortal()
  ConstructPortal(activePortal)
  $(`.navbar-nav .nav-link[data-tab=${playerData.activePortal}]`).addClass(
    'active',
  )

  $('.navbar-nav')
    .find('.nav-link')
    .click((e) => {
      $('.navbar-nav .nav-link').removeClass('active')
      $(e.target).addClass('active')

      const target = $(e.target).data('tab')

      destroyPortal()
      playerData.activePortal = target
      activePortal = portals[target]
      SavePlayerData()
      ConstructPortal(activePortal)
    })
}

setTimeout(reDim, 500)
