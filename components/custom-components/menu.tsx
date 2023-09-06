import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  import Image from 'next/image'

  export function Menu() {
    return (
      <div className="top-menu">
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">
             BEPC Design System Guidelines</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <a href="https://www.bepcinc.com/" target="_blank">Website</a></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Dark mode <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              About <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="relative">AI toolkit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
            <a href="https://bepc.backnetwork.net/AIToolkit/index?code=0.AXYAzlGVzoIagEO5kaAsVtgz_NQLcimP8IFOtKY8eoHx9zG0AAU.AgABAAIAAAAtyolDObpQQ5VtlI4uGjEPAgDs_wUA9P-WA7k0wzN38parpqX9tHymCb4-nqT7pB-sDKK-8v3Rngw-yuZGd7hQAZOkGBUHoSxceAzw4vX-tS3S4hzvzWCf3nNth5T02wqUXvvy3EUrEWlpApn2m8QgFufW3UubZ4BCWagekP8d-8rQisHKQM60s_UXDcyzPNLxYfuQ9rFL_nrf0PAQ9sMH5a0DffnrBvBkz1bdtZLzRYuFwltczCIYYCqbia_EomNA1qCCwas7HC_j2ty0CdHo2Xc1vEzP68HaQFrGYSMGiZl_x-e8EIzeD_jBbdQ6_2-jaR8-4ULGQnresC3hy-Z_fsiGbnsV_G0JAOPe93epkIIvjMQmH7qESQuhc_dQbqUbEqUuGXwKtRiLbo4QHGleT_DZ0qi953wIaWGXqDBE7yf_MCbfePH0yySCBuPKlQOiTMWATm22RCA6hZy13cFavImRw8Qe_0WSq8SA7f6sAPFDS-eG35B3i208dkVJfwJ-GH862j-tcejBj3EIqj-TroO7NJ7d25TjeEh4yDLrTBAkl1lLvzAs_U-s25hPs8jGaB_2VFmERTwjhPyRMllUpmydY7nbysxCzUu53T3ukNce-90rIgYKIX30ZdogU8HCyWPNeQx5oUWucs_u6qBj-TRO-LinBhJVo1KTl26l-lLvbD3IZqz3YNpRVDdHAJ78OUHbDHTjEksDy8a_msXWmfvKhufOepRHuaHxf4S3Re0pbz_zNVkD6qX_3--lITBBez9oLzHnAkP0zPWfUgObvKG_5RenmmqKeCppScEAEER72Rl4Cl6qkWW1-wJGy_ieQBucPKuEDBc4QEu0SHbGwzV3MHU8h2fxXpTMcoeoOCulRvA2JDcwIFVC-LA5&session_state=3d9a24e5-79be-46c5-af4f-891a764b3ef3" target="_blank">AI toolkit directory</a><MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <a href="https://jobsift-nbeiga6r5sdjdbddrbn6sc.streamlit.app/" target="_blank">Jobsift</a><MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <a href="https://resumestyler-fx33auv9edncj4ysnyyawn.streamlit.app/" target="_blank">Resume styler</a><MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <a href="https://sl5ppsdxvpm8muhopnw7bt.streamlit.app/" target="_blank">Job equalizer</a><MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <a href="https://callscribe-v6vhupn93jssu4b6qv2ieb.streamlit.app/" target="_blank">CallScribe</a><MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>BEPC Systems</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <a href="https://www.auditsrms.com/" target="_blank">ARMS</a><MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <a href="https://bepc.backnetwork.net/BEPCINC/BeTracking/" target="_blank">Betracking</a> <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem >
              <a href="https://bepc.backnetwork.net/OneMaster/login" target="_blank">EMS</a><MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <a href="http://206.189.224.223:8081/" target="_blank">BEATS</a><MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      </div>
    )
  }