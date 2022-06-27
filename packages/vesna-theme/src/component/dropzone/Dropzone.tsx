import React from 'react';
import {toast} from 'react-toastify';
import {useDropzone} from 'react-dropzone';
import {DropzoneProps} from './Dropzone.types';

export function Dropzone({
  children,
  files,
  onChange,
  acceptedType,
}: DropzoneProps) {
  const onDrop = (files: File[]) => {
    files.forEach(file => {
      if (!file.type.includes(acceptedType)) {
        toast.error(`${file.name} is not supported`);
        return;
      }
    });

    onChange(files);
  };

  const onRemove = (fileIndex: number) => {
    const updatedFiles = [...files];
    delete updatedFiles[fileIndex];
    onChange(updatedFiles);
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <>
      <div
        className="p-4 m-4"
        style={{
          border: '1px solid grey',
          borderRadius: 5,
          borderColor: isDragActive ? 'blue' : 'grey',
          textAlign: 'center',
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {files.length > 0 ? (
          <div className="row">
            {files.map((file, fileIndex) => (
              <div
                className="col"
                key={`file_upload_${fileIndex}`}
                style={{minWidth: '50%'}}
              >
                <img
                  className="card-img-top"
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{borderRadius: 10, imageRendering: 'crisp-edges'}}
                  height={250}
                  width="100%"
                />
              </div>
            ))}
          </div>
        ) : (
          children
        )}
      </div>
    </>
  );
}
