import React from "react";
import { Dropdown } from 'semantic-ui-react';
import { Icon, Input, Button, Popup } from 'semantic-ui-react';

const friendOptions = [
    {
        key: 'Crust',
        text: 'Crust',
        value: 'Crust',
        image: { avatar: true, src: '/images/aptos.png' },
    },
    {
        key: 'Moonriver',
        text: 'Moonriver',
        value: 'Moonriver',
        image: { avatar: true, src: '/images/aptos.png' },
    },
]

interface Props {

}

function Body(): React.ReactElement<Props> | null {

    return (
        <div className='crossChainBody'>
            <div className='crossChainBodyBox'>
                <div className='crossChainBodyContent'>
                    <div className='crossChainTitle'>
                        Cross chain
                    </div>
                    <div className='crossChainFromTo'>
                        <div className='crossChainFrom'>
                            <div className='fromTitle'>From</div>
                            {/* <div className='fromContent'>
                                <div className='dropdownLable'>
                                    
                                </div>
                                <div></div>
                            </div> */}
                            <Dropdown
                                className='chainSelect'
                                placeholder='Select Friend'
                                fluid
                                selection
                                options={friendOptions}
                                defaultValue={friendOptions[0].value}
                            />
                        </div>
                        <div className='arrow'>
                            <Icon name='arrow right' />
                        </div>
                        <div className='crossChainFrom'>
                            <div className='fromTitle'>To</div>
                            {/* <div className='fromContent'>
                                <div className='dropdownLable'>
                                    Crust
                                </div>
                                <div></div>
                            </div> */}
                            {/* <Identicon value={"cTMgbhuCX6UpTgy3aca8CtDvUvzpoBoNv2ipFmdNxGJBkLMe3"} /> */}
                            <Dropdown
                                className='chainSelect'
                                fluid
                                selection
                                options={friendOptions}
                                defaultValue={friendOptions[0].value}
                            />
                        </div>
                    </div>
                    <div className='crossChainFromTo'>
                        <div className='crossChainFrom'>
                            <div className='fromTitle'>Asstes</div>
                            {/* <div className='fromContent'>
                                <div className='dropdownLable'>
                                    Crust
                                </div>
                                <div></div>
                            </div> */}
                            <Dropdown
                                className='chainSelect'
                                fluid
                                selection
                                options={friendOptions}
                                defaultValue={friendOptions[0].value}
                            />
                        </div>
                        {/* <div className='crossChainFrom'>
                        </div> */}
                        <div className='accountAssets'><span id='balance'>Balance:</span><span id='amount'>10086 CRU</span></div>
                    </div>
                    <div className='crossAmount'>
                        <Input
                            className='amountInput'
                            icon={<Icon name='battery four' />}
                            placeholder='Enter an amount...'
                            // error={true}
                        />
                    </div>
                    <div className='buttonContainer'>
                        <Button className='crossButton'>Transfer</Button>
                    </div>
                    <div className='gasFee'>
                        <Popup content='This is the est. transaction fee and the max that you will be charged, when you transfer assets from Parallel to Polkadot.' 
                            trigger={<span>Est. Gas Fee: 0 CRU<Icon name='exclamation'/></span>} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;