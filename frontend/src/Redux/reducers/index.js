import { combineReducers } from 'redux';
import dataListReducers from './dataListReducers';
import activeItemReducers from './activeItemReducers';
import userReducers from './userReducers';
import activeUserReducers from './activeUserReducers';
import activeDepartmentReducers from './activeDepartmentReducers';
import departmentReducers from './departmentReducers';
import loginReducers from './loginReducers';
import roleReducers from './roleReducers';
import activeRoleReducers from './activeRoleReducers';
import activeGIPReducers from './activeGIPReducers';
import getInvolvedProjectReducers from './getInvolvedProjectReducers';
import abilitiesReducers from './abilitiesReducers';
import activeAbilitiesReducers from './activeAbilitiesReducers';
import activeAbilityRatingReducers from './activeAbilityRatingReducers';
import abilityRatingReducers from './abilityRatingReducers';
import pabilitiesReducers from './pabilitiesReducers';


const reducers=combineReducers({    
dataListReducers,
activeItemReducers,
userReducers,
activeUserReducers,
activeDepartmentReducers,
departmentReducers,
loginReducers,
roleReducers,
activeRoleReducers,
activeGIPReducers,
getInvolvedProjectReducers,
abilitiesReducers,
activeAbilitiesReducers,
activeAbilityRatingReducers,
abilityRatingReducers,
pabilitiesReducers,
})
export default reducers;