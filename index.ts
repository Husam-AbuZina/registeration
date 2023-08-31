import express from 'express';

var app = express();

const PORT = 5000;

app.use(express.json());


app.get('/Registeration', (req, res) => {
    
})

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

export default app;