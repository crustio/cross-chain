import React from "react";
import { Dropdown } from 'semantic-ui-react';
import DropdownText from "./DropdownText";
import Identicon from "./Identicon";

const friendOptions = [
    {
        key: 'cTGShZQRDsZJYxxaBwb1',
        text: <DropdownText value={"cTGShZQRDsZJYxxaBwb1"} />,
        value: 'cTGShZQRDsZJYxxaBwb1',
        //   image: { avatar: true, src: <Identicon value={"cTMgbhuCX6UpTgy3aca8CtDvUvzpoBoNv2ipFmdNxGJBkLMe3"} /> },
        image: <Identicon value={"cTMgbhuCX6UpTgy3aca8CtDvUvzpoBoNv2ipFmdNxGJBkLMe3"} />
    },
    {
        key: 'cTGShZQRDsZJYxxaBwb2',
        text: <DropdownText value={"cTGShZQRDsZJYxxaBwb2"} />,
        value: 'cTGShZQRDsZJYxxaBwb2',
        //   image: { avatar: true, src: <Identicon value={"cTMgbhuCX6UpTgy3aca8CtDvUvzpoBoNv2ipFmdNxGJBkLMe3"} /> },
        image: <Identicon value={"cTJqLCVWKUuAGoV2eM78yh94E8Jir1bqK8Fa9jb1EABZqVRvz"} />
    }
]

interface Props {

}

function Header(): React.ReactElement<Props> | null {

    return (
        <div className='header'>
            <div className='headerContent'>
                <div className="headerLogo">
                    <img src='./images/12.png' />
                </div>
                <div className='accountLogoContent'>
                    <Dropdown
                        className='accountDropdown'
                        inline
                        options={friendOptions}
                        defaultValue={friendOptions[0].value}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;