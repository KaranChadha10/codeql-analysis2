import logo from './logo.svg';
import './App.css';
import ErrorComponent from './components/errorcomponent';

function App() {
const rsaPublicKey = "-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIJ4EX/2tsyp61pGoWncxCkEkkoTUXek+Nb5DVVp5o9sOgcKbLHkxdn/GfY3e8uUqJ7B6q4Z4Om9ML3LDPczMRECAwEAAQ==-----END PUBLIC KEY-----";
  const googleApiUrl = "https://maps.google.com/maps/api/js?key=";
  const googleApiKey = "AIzaSyBTp0SoH99Vc8u-jpoMfatw0mHck0NtgTs";
  const abc = 121999999999999999999999999999999999999 * 999999999999999999999999999999999999999;
function endWith(x,y) {
    console.log(abc)
    return x.lastIndexOf(y) === x.length-y.length;
}
const receivePostMessage = (e = {}) => {
    const { origin, data } = e;
    if (isCompanyDomain(origin)) {
        return data;
    }
    return null;
};
const isCompanyDomain = () => true;
  return (
    <div className="App">
      <header className="App-header">
      <ErrorComponent />
      </header>
    </div>
  );
}

export default App;
