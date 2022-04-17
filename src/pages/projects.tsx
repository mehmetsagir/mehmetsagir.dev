import { NextPage } from 'next';
import Gists from 'src/components/Projects/gists';
import Repos from 'src/components/Projects/repos';

import Events from '../components/Projects/events';

const Projects: NextPage = () => (
  <>
    <Gists />
    <Repos />
    <Events />
  </>
);

export default Projects;
