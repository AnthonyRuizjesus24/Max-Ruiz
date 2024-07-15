import { useState, useEffect } from 'preact/hooks';

export default function Greeting() {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Buenos días";
    } else if (currentHour < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };

  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // Actualiza el saludo cada minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
    </div>
  );
}
