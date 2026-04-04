// Repare que importamos de 'mysql2/promise'
import mysql from 'mysql2/promise';

/***
 * 
 * 
 * npm install mysql2

    npm install --save-dev @types/mysql2
 * 
 */

// A função recebe o selo 'async'
async function buscarDetalhesDoRafael() {
    const connection = await mysql.createConnection({ /* configurações */ });

    // Código linear! O 'await' faz ele esperar a linha 1 terminar antes de ir pra 2.
    const [usuario] = await connection.query('SELECT * FROM users WHERE nome = "Rafael"');
    
    const [pedidos] = await connection.query(`SELECT * FROM pedidos WHERE user_id = ${usuario[0].id}`);
    
    const [detalhes] = await connection.query(`SELECT * FROM detalhes WHERE pedido_id = ${pedidos[0].id}`);

    console.log("Finalmente os detalhes:", detalhes);
}

buscarDetalhesDoRafael();