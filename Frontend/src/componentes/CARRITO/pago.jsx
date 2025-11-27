import { initMercadoPago } from '@mercadopago/sdk-react';


// Inicializa Mercado Pago con tu Public Key
initMercadoPago(import.meta.env.VITE_APP_MP_PUBLIC_KEY);


// --- CREDENCIALES DE PRUEBA ---
// Public Key: APP_USR-7ef6c96c-6d71-47e2-96e6-07d55719f554
// Access Token: APP_USR-347992060899893-111419-5f473172880a8a0b8886adb16d8ac136-2991323954

// ---- Seller Test User ----
// user: TESTUSER3556920240865378284
// pass: 4piP1MpuM6
// id: 2991323954
// email: test_user_3556920240865378284@testuser.com

// ---- Buyer Test User ----
// user: TESTUSER3029953678044084587
// pass: gcSUyWwuY7
// id: 2991764202
// email: test_user_3029953678044084587@testuser.com

// -------- Tarjetas de crédito de prueba --------
/*
Tarjeta	            Número                  Código de seguridad         Fecha de caducidad
Mastercard          5031 7557 3453 0604     123                         11/30
Visa                4509 9535 6623 3704     123                         11/30
American Express    3711 803032 57522       1234                        11/30
*/

// ------- Usuarios para simular estado pago ----------
/*
Estado de pago (usuario)    Descripción                     Documento de identidad
APRO                        Pago aprobado                   (DNI) 12345678
OTHE                        Rechazado por error general     (DNI) 12345678
*/