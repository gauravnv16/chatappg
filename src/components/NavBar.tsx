import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Button, IconButton } from '@mui/material';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-3 bg-black text-white">
      <h1>ChatAppg</h1>
      <MenuOutlinedIcon fontSize='small' className='cursor-pointer'/>
    </nav>
  );
}
