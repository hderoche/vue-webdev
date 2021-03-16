import bcrypt from 'bcrypt'

/**
 * Encrypte un mot de passe
 *
 * @function
 * @async
 *
 * @param {string} passwd - Mot de passe en clair
 * @returns {Promise.<String>}
 */
export function hash (passwd) {
  return bcrypt.hash(passwd, 10)
}

/**
 * Compare une chaîne en claire avec un hash
 *
 * @function
 * @async
 *
 * @param {string} passwd - Mot de passe en clair
 * @param {string} hash - Hash à comparer
 * @returns {Promise.<boolean>}
 */
export function compareHash (passwd, hash) {
  return bcrypt.compare(passwd, hash)
}