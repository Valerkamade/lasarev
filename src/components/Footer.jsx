export default function Footer() {
const yearNow = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy;Valerkamade {yearNow} Lasarev</p>
    </footer>
  );
}
