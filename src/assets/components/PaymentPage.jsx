import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CreditCard, Ban as Bank, Wallet } from 'lucide-react';
import '../styles/PaymentPage.css';

function PaymentPage() {
  const { type } = useParams();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const getTitle = () => {
    switch(type) {
      case 'monthly':
        return 'Donación Mensual';
      case 'single':
        return 'Donación Única';
      case 'volunteer':
        return 'Registro de Voluntariado';
      default:
        return 'Donación';
    }
  };

  const predefinedAmounts = type === 'monthly' 
    ? [10, 25, 50, 100] 
    : [50, 100, 250, 500];

  return (
    <div className="payment-container">
      <div className="payment-content">
        <h1>{getTitle()}</h1>

        {type !== 'volunteer' ? (
          <>
            <div className="payment-card">
              <h2>Selecciona el Monto</h2>
              
              <div className="amount-grid">
                {predefinedAmounts.map((preset) => (
                  <button
                    key={preset}
                    className={`amount-button ${amount === preset.toString() ? 'selected' : ''}`}
                    onClick={() => setAmount(preset.toString())}
                  >
                    ${preset}
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <label>O ingresa otro monto</label>
                <div className="amount-input">
                  <span>$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Ingresa el monto"
                  />
                </div>
              </div>

              <h2>Método de Pago</h2>
              <div className="payment-methods">
                <button
                  className={`method-button ${paymentMethod === 'card' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard className="method-icon" />
                  <span>Tarjeta de Crédito</span>
                </button>

                <button
                  className={`method-button ${paymentMethod === 'bank' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <Bank className="method-icon" />
                  <span>Transferencia Bancaria</span>
                </button>

                <button
                  className={`method-button ${paymentMethod === 'wallet' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('wallet')}
                >
                  <Wallet className="method-icon" />
                  <span>Billetera Digital</span>
                </button>
              </div>
            </div>

            <button
              className="submit-button"
              disabled={!amount || !paymentMethod}
            >
              Continuar con el Pago
            </button>
          </>
        ) : (
          <div className="volunteer-form">
            <form>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label>Teléfono</label>
                <input
                  type="tel"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div className="form-group">
                <label>Área de Interés</label>
                <select>
                  <option value="">Selecciona un área</option>
                  <option value="conservation">Conservación</option>
                  <option value="education">Educación Ambiental</option>
                  <option value="research">Investigación</option>
                  <option value="community">Trabajo Comunitario</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  rows="4"
                  placeholder="Cuéntanos sobre ti y por qué te gustaría ser voluntario"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Enviar Solicitud
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;