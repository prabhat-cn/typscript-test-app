import { User, red } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';

// const user = new User();
// const company = new Company();

const user = new User();
const customMap = new CustomMap('map');

customMap.addUsermarker(user);
