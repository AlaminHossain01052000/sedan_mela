import { Avatar, Button, Card, CardActions, CardContent, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material';
import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { email, name, rating, description } = testimonial;

    return (
        <div style={{ marginBottom: "100px" }}>
            <Card sx={{ width: 320, height: 400, backgroundColor: "red", marginRight: "10px", borderRadius: "10px", position: "relative" }}>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={name}
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                color: "black"
                            }}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', marginRight: "5px" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {testimonial.company.post} at
                                    </Typography>
                                    {testimonial.company.name}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {email}
                    </Typography>
                    <div style={{ height: "100px" }}>
                        <Typography variant="h6" sx={{
                            textAlign: 'left',
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            //  -webkit-line-clamp: 2, /* number of lines to show */
                            webkitLineCamp: 2,
                            webkitBoxOrient: "vertical"
                            //  -webkit-box-orient: "vertical";    
                        }}
                            component="div">
                            {
                                description
                            }
                        </Typography>
                    </div>

                </CardContent>
                <CardActions>
                    <Rating name="read-only" value={rating} readOnly sx={{ position: "absolute", bottom: "10px", left: "10px" }} />
                </CardActions>
            </Card>
        </div>
    );
};

export default Testimonial;