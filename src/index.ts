import { User, red } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

// customMap.addUsermarker(user);

customMap.addMarker(user);
customMap.addMarker(company);
