import React, { useState } from 'react';

import { Dialog, DialogTitle, DialogContent, Button } from '@material-ui/core';

const SpellDialog = () => {
    return (
        <Dialog
            open={true}
            fullWidth={true}
        >
            <DialogTitle>
                Spell Selection
            </DialogTitle>

            <DialogContent>

                <Button  color="primary">
                    Next
                </Button>
                <Button  color="secondary">
                    cancel
                </Button>
            </DialogContent>
            
        </Dialog>
    );
}

export default SpellDialog;