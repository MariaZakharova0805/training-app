import { UserIcon } from "../../entities/user-icon/user-icon"
import { ChangeName } from "../../features/change-name/change-name"
import { ChangeImage } from "../../features/change-image/change-image"

export const Settings = () => {
    return (
        <div>
            <h3>Чтобы изменить имя, введие его в окошке и кликни кнопку "сохранить"</h3>
            <ChangeName />
            <h3>Чтобы поменять аватар кликни ни него</h3>
            <UserIcon drawer={false} />
            <ChangeImage />
        </div>
    )
}