import { Divider } from "@mui/material"
import { UserData } from "../../entities/user-data/user-data"
import { Navbar } from "../navbar/navbar"
import { DangerButton } from "../../entities/delete-button/delete-button"
import { UserIcon } from "../../entities/user-icon/user-icon"

export const DrawerContent = () => {
  return (
    <div>
      <UserIcon drawer={true}/>
      <Divider />
      <Navbar />
      <Divider />
      <UserData />
      <Divider />
      <DangerButton />
    </div>
  )
}

