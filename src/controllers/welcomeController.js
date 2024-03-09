
export const welcomeController = (req, res) => {
    return res.status(200).json({message: 'Welcome to the Blog API!'});
}