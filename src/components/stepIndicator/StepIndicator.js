import React from 'react';
import Steps, { Step } from 'rc-steps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css';

import { isNotEmptyArray } from 'src/services/validationService';

const StepIndicator = props => {

	const { steps, current, className } = props;
	const hasSteps = isNotEmptyArray(steps);

	const iconsConfig = {
		finish: <FontAwesomeIcon icon={faCheck} className='text-main-color'/>
	};

	return <>
		{
			hasSteps
			?
				<Steps className={className} current={current} icons={iconsConfig} type='navigation'>
					{
						steps?.map( step => (
							<Step title={step}/>
						))
					}
				</Steps>
			:
				undefined
		}
	</>
	
};

export default StepIndicator;