export default (req: any, res: any) => {
  res.status(200).json({ text: "Hello", url: req.url });
};
