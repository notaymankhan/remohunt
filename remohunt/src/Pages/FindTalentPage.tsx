import {Divider} from '@mantine/core'
import SearchBar from '../FindTalent/SearchBar';
import Talent from '../FindTalent/Talents';
const FindTalentPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Divider mr='md' size = 'xs' />
            <SearchBar/>
            <Divider mr='md' size = 'xs' />
            <Talent/>
        
            
        </div> 
    );
    }
export default FindTalentPage;