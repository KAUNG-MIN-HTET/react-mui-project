import {
  Avatar,
  Fab,
  Modal,
  Typography,
  Tooltip,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: { xs: "20px", sm: "92%" },
        }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            height: 280,
            width: 400,
            borderRadius: 3,
            padding: 3,
          }}
          bgcolor={"background.default"}
        >
          <Typography variant="h5" sx={{ color: "gray", textAlign: "center" }}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/6.jpg"
            />
            <Typography
              variant="span"
              fontWeight={700}
              sx={{ marginLeft: 1 }}
              color={"text.primary"}
            >
              Kmh
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            label="What's on your mind?"
            multiline
            rows={4}
            variant="standard"
            sx={{
              width: "100%",
            }}
          />
          <Stack direction="row" gap={2} mt={2}>
            <EmojiEmotionsIcon color="primary" />
            <InsertPhotoIcon color="success" />
            <VideocamIcon color="info" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup variant="contained" sx={{ marginTop: "10px" }} fullWidth>
            <Button>POST</Button>
            <Button sx={{ width: "20%" }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
