import { faDownload } from '@fortawesome/free-solid-svg-icons';

const data = {
  title: 'Lucas Winkler',
  subtitle:
    'Hey, this is my personal website which should give you a good understanding of my skills as a web developer.',
  btnResume: {
    text: 'Resume',
    icon: faDownload,
    style: 'btn btn-cta',
    href: './dummy-resume.pdf' // TODO: Create resume, convert to PDF and name it lucas_winkler-resume
  }
};

export default data;
