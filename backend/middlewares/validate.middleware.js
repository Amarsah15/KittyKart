import zod from "zod";

export const validate = (schema) => (req, res, next) => {
  try {
    const data =  schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
