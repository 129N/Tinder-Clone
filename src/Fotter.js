import React from 'react';
import { Icon } from '@iconify/react';

import "./Fotter.css";

function Fotter(){


    return(
        <div className='fotter'>

<Icon icon="ci:house-01" className="icon-house"  />
<Icon icon="mingcute:search-3-line" className="icon-search" />
<Icon icon="basil:notification-on-outline" className="icon-notification" />

<Icon icon="bi:people" className="icon-person_for_search"/>
<Icon icon="ci:settings" className="icon-setting" />


        </div>
    )
}

export default Fotter;
