import User from "../models/user.model.js";
import Profile from "../models/profile.model.js";

// 📌 Crear usuario (solo admin, opcional)
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// 📌 Listar todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email", "role", "deletedAt"],
      include: { model: Profile, as: "profile" },
      paranoid: false, // 👈 para mostrar también los eliminados
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "No existen usuarios" });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// 📌 Buscar usuario por ID
export const getUserByPk = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: ["id", "username", "email", "role"],
      include: { model: Profile, as: "profile" },
      paranoid: false, // 👈 para mostrar también si está eliminado
    });

    if (!user) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// 📌 Actualizar usuario
export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await User.update(req.body, { where: { id } });

    if (updated === 0) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    const user = await User.findByPk(id, {
      attributes: ["id", "username", "email", "role"],
      include: { model: Profile, as: "profile" },
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
  
    const user = await User.findByPk(id, { paranoid: false });

    if (!user) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    if (user.deletedAt) {
      return res.status(410).json({ message: "El usuario ya había sido eliminado (soft delete)" });
    }

    await user.destroy(); // Soft delete
    return res.status(200).json({ message: "Usuario eliminado correctamente (soft delete)" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
