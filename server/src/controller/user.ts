import { Response } from "express";
import User from "../models/user.model";
import CustomRequest from "../types/types";
import cloudinary from "../config/clodinary.config";
import { UploadedFile } from "express-fileupload";

const getUser = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.userId;
    const { username, email } = req.body;
    const { picture }: any = req.files;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        username,
      },
      { new: true }
    );

    if (!user) {
      return res.status(401).send({ msg: "User not found" });
    }

    if (picture) {
      try {
        if (user.picture) {
          //vemos si el user ya tiene una imagen para borrarla y reemplazarla por la nueva
          const fileArray = user.picture[0].split("/");
          const fileName = fileArray[fileArray.length - 1];
          const [public_id] = fileName.split(".");
          cloudinary.uploader.destroy(public_id);
        }
        const { tempFilePath } = picture;
        const { secure_url } = await cloudinary.uploader.upload(tempFilePath, {
          folder: "fitbless/users",
        });

        user.picture = secure_url;
        await user.save();
      } catch (error) {
        console.log(error);
      }
    }

    res.status(200).json({
      msg: "User profile updated succesfully",
      user,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getUser, updateUser };
