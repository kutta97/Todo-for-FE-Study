import Model from "./model.js";
import Controller from "./controller.js";
import Template from "./template.js";
import View from "./view.js";

const model = new Model();

const template = new Template();
const view = new View(template);

const controller = new Controller(model, view);
