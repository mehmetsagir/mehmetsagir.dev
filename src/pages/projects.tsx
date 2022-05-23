import { NextPage } from 'next';
import Gists from 'src/components/Projects/gists';
import Repos from 'src/components/Projects/repos';

import Commits from '../components/Projects/commits';

const Projects: NextPage = () => (
  <>
    <Gists />
    <Repos />
    <Commits />
  </>
);

export default Projects;
