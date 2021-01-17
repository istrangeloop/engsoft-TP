import React, { useState } from "react"
import { Container, Button, Dialog } from "@material-ui/core"

const MaterialExample = () => {
  const [showDialog, setShowDialog] = useState(false)

  const handleButtonClick = () => {setShowDialog(true)}
  
  const handleDialogClose = () => {setShowDialog(false)}

  return (
    <Container>
      <Button onClick={handleButtonClick}>
        MaterialUI
      </Button>
      <Dialog open={showDialog} onClose={handleDialogClose}>
        This is the EXAMPLE DIALOG!
      </Dialog>
    </Container>
  )
}

export default MaterialExample