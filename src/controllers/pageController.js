const Page = require('../models/Page');

const createPage = async (req, res) => {
  try {
    const { title, content, slug } = req.body;
    
    const pageExists = await Page.findOne({ slug });
    if (pageExists) {
      return res.status(400).json({ error: 'Já existe uma página com este slug' });
    }
    
    const page = new Page({
      title,
      content,
      slug,
      createdBy: req.user._id,
      updatedBy: req.user._id
    });
    
    await page.save();
    
    res.status(201).json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPages = async (req, res) => {
  try {
    const pages = await Page.find({}).select('title slug createdAt');
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPageBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const page = await Page.findOne({ slug }).populate('createdBy', 'name');
    if (!page) {
      return res.status(404).json({ error: 'Página não encontrada' });
    }
    
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, content, newSlug } = req.body;
    
    let page = await Page.findOne({ slug });
    if (!page) {
      return res.status(404).json({ error: 'Página não encontrada' });
    }
    
    if (newSlug && newSlug !== slug) {
      const slugExists = await Page.findOne({ slug: newSlug });
      if (slugExists) {
        return res.status(400).json({ error: 'Já existe uma página com este slug' });
      }
      page.slug = newSlug;
    }
    
    if (title) page.title = title;
    if (content) page.content = content;
    
    page.updatedBy = req.user._id;
    page.updatedAt = Date.now();
    
    await page.save();
    
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePage = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const page = await Page.findOneAndDelete({ slug });
    if (!page) {
      return res.status(404).json({ error: 'Página não encontrada' });
    }
    
    res.json({ message: 'Página removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPage,
  getAllPages,
  getPageBySlug,
  updatePage,
  deletePage
};