# About this Proj

It's a simple implementation of OpenLDAP to OpenLDAP with plenty of ldif eamples and also connecting the server with a simple app.

## Some LDAP commands

### For checking the config
```
ldapsearch -x -b 'dc=ldap,dc=example,dc=com' '(objectClass=*)'
ldapsearch -x -h localhost -b dc=ldap,dc=example,dc=com -D "cn=admin,dc=ldap,dc=example,dc=com" -w ldap
```

### Check for a user
```
docker exec $LDAP2_CID ldapsearch -x -H ldap://ldap.example.com -b dc=ldap,dc=example,dc=com -D "cn=admin,dc=ldap,dc=example,dc=com" -w admin -ZZ
```

### Add ldifs
```
ldapadd -Y EXTERNAL -H ldapi:/// -f 10-user-group-base.ldif 
```

### Attach TLS to docker container
```
docker run --hostname ldap.example.com --detach osixia/openldap:latest
```

## References

1. https://github.com/osixia/docker-openldap

## Additiontal Info

- There are few bugs which needs to be worked on, like redploying the containers (after making some changes) will result in backup container throwing some error etc.
- If the ldifs are not being added automatically then exec into the container then add them manually