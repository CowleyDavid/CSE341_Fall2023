const firstName = (req, res) => {
    res.send('First Name');
};

const secondName = (req, res) => {
    res.send('Second Name');
};


module.export = {
    firstName,
    secondName
}