const ctrl = {
  view: async (req, res) => {
    res.status(200).send("this is View");
  },
  add: async (req, res) => {
    res.status(201).send("this is Add");
  },
  update: async (req, res) => {
    res.status(200).send("this is Update");
  },
  delete: async (req, res) => {
    res.status(200).send("this is Delete");
  },
};
module.exports = ctrl;
