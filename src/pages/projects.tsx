import { NextPage } from 'next';
import Gists from 'src/components/Projects/gists';
import Repos from 'src/components/Projects/repos';

const Projects: NextPage = () => (
  <>
    <Gists />
    <Repos />
  </>
);

export default Projects;
