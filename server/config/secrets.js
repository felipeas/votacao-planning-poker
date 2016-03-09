module.exports = {
    db: {
    	mongo: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/VotacaoPP'
    },
    sessionSecret: process.env.SESSION_SECRET || '123456'
};
