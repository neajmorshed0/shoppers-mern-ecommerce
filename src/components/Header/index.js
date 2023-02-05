// import Ad from './Ad';
import Top from './Top';
import MainHeader from './MainHeader';

export default function Header({ country }) {
  return (
    <header>
      {/* <Ad /> */}
      <Top country={country} />
      <MainHeader />
    </header>
  );
}
