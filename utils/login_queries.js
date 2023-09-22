const loginQuery = `
        SELECT * from _user where user_email = ? AND is_user = ?
    `;

const registerQuery = `
        INSERT INTO _user SET ?
    `;

module.exports = { loginQuery, registerQuery };
