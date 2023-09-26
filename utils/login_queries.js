const loginQuery = `
        SELECT * from _User where user_email = ? AND is_user = ?
    `;

const registerQuery = `
        INSERT INTO _User SET ?
    `;

module.exports = { loginQuery, registerQuery };
