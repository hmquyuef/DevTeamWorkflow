export async function UploadFile(req, res) {
    if (!req.files || !req.files.file) {
        return res.status(400).send('No file was uploaded.');
    }

    let sampleFile = req.files.file;

    // Kiểm tra tên tệp để tránh các trường hợp đặc biệt (path traversal attacks)
    const filename = sampleFile.name.replace(/[<>:"/\\|?*]/g, '');
    //kiểm tra đường dẫn thư mục
    if (!fs.existsSync('../uploads')) {
        fs.mkdirSync('../uploads');
    }
    const filePath = `../uploads/${filename}`;
    // Kiểm tra nếu tệp đã tồn tại, sau đó xóa tệp cũ trước khi di chuyển tệp mới
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // Xóa tệp cũ
    }
    sampleFile.mv(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error moving the file.');
        }
        else {
            res.send(filename);
        }
    });
};

export async function RemoveFile(req, res) {
    if (!req.body.filename) {
        return res.status(400).send('No filename provided.');
    }

    const filename = req.body.filename.replace(/[<>:"/\\|?*]/g, '');
    const filePath = `../uploads/${filename}`;

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(err);
            return res.status(404).send('File not found.');
        }

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error removing the file.');
            }
            res.send('File removed successfully!');
        });
    });
};